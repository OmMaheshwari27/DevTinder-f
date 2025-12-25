import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { createSocketConnection } from "../utils/socket";
import { useRef } from "react";



const Chat = () => {
  const { targetUserId } = useParams();
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);
  const [input, setInput] = useState("");
  const [targetUser, setTargetUser] = useState(null);

  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!targetUserId) return;

    const fetchChatId = async () => {
      const res = await axios.get(
        `${BASE_URL}/chat/getChatId/${targetUserId}`,
        { withCredentials: true }
      );
      setChatId(res.data.chatId);
    };
    fetchChatId();
  }, [targetUserId]);
  // -------------------------------
  // FETCH TARGET USER
  // -------------------------------
  useEffect(() => {
    if (!targetUserId) return;

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/profile/view/${targetUserId}`,
          { withCredentials: true }
        );
        setTargetUser(res.data);
      } catch (err) {
        console.log("Target user error", err);
      }
    };
    fetchUser();
  }, [targetUserId]);

  // -------------------------------
  // FETCH OLD MESSAGES (DB)
  // -------------------------------
  useEffect(() => {
    if (!chatId) return;

    const fetchMessages = async () => {
      const res = await axios.get(
        `${BASE_URL}/chat/messages/${chatId}`,
        { withCredentials: true }
      );
      setMessages(res.data);
    };

    fetchMessages();
  }, [chatId]);

  // -------------------------------
  // SOCKET CONNECTION
  // -------------------------------
  useEffect(() => {
    if (!chatId) return;

    socket.current = createSocketConnection();

    socket.current.on("connect", () => {
      socket.current.emit("joinChat", { chatId });
    });

    socket.current.on("msgReceived", (msg) => {
      setMessages((prev) => {
        if (prev.some(m => m._id === msg._id)) return prev;
        return [...prev, msg];
      });
    });

    return () => {
      socket.current.disconnect();
      socket.current = null;
    };
  }, [chatId]);

  // -------------------------------
  // RECEIVE MESSAGE
  // -------------------------------
  // useEffect(() => {
  //   if (!socket) return;

  //   const handler = (msg) => {
  //     setMessages((prev) => {
  //       if (prev.some(m => m._id === msg._id)) return prev;
  //       return [...prev, msg];
  //     });
  //   };

  //   socket.on("msgReceived", handler);
  //   return () => socket.off("msgReceived", handler);
  // }, [socket]);

  // -------------------------------
  // SEND MESSAGE
  // -------------------------------
  const sendMessage = () => {
    if (!input.trim() || !socket.current) return;

    socket.current.emit("sendMsg", {
      chatId,
      from: user._id,
      to: targetUserId,
      text: input,
    });

    setInput("");
  };

  // -------------------------------
  // UI
  // -------------------------------
  return (
    <div style={styles.container}>
      <h3>
        Chat with{" "}
        {targetUser
          ? `${targetUser.firstName} ${targetUser.lastName}`
          : "User"}
      </h3>

      <div style={styles.chatWindow}>
        {messages.map((msg) => (
          <div
            key={msg._id}
            style={{
              ...styles.message,
              alignSelf:
                msg.senderId === user._id ? "flex-end" : "flex-start",
              backgroundColor:
                msg.senderId === user._id ? "black" : "#1976D2",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} style={styles.sendBtn}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    margin: "20px auto",
    fontFamily: "Arial",
  },
  chatWindow: {
    backgroundColor: "#111",
    border: "1px solid #333",
    height: "350px",
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderRadius: "10px",
  },
  message: {
    padding: "10px 14px",
    borderRadius: "12px",
    maxWidth: "75%",
    fontSize: "15px",
    color: "white",
  },
  inputContainer: {
    display: "flex",
    marginTop: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #555",
    backgroundColor: "#111",
    color: "white",
  },
  sendBtn: {
    padding: "10px 14px",
    marginLeft: "5px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Chat;
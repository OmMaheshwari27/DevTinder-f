import { useSelector } from "react-redux";

const Nav_Bar = () => {
    const user = useSelector((store) => store.user);
    //console.log(user);

    return (
        <div className="navbar bg-base-800 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">dev tinder </a>
            </div>
            <div className="flex gap-2 items-center"> 
                {/* Conditional rendering for the welcome message */}
                {user && user.firstName && ( // Ensure user and user.firstName exist
                    <span className="text-white text-lg font-medium mr-4"> 
                        Welcome {user.firstName}!
                    </span>
                )}
                {/* The existing dropdown structure, only shown if user exists */}
                {user && (
                    <div className="dropdown dropdown-end mx-4">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Avatar" // Better alt text
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nav_Bar;
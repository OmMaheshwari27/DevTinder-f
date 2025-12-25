
import Body from './components/Body'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Profilee from './components/Profilee';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/Feed';
import Connections from './components/Connections';
import Requests from './components/Requests';
import PremiumPlans from './components/PremiumPlans';
import PremiumInvite from './components/PremiumInvite';
import Chat from './components/Chat';


function App() {
  return (

    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<Body/>}>
                <Route path='/' element={<Feed/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profilee/>}/>
                <Route path='/connections' element={<Connections/>}/>
                <Route path='/requests' element={<Requests/>}/>
                <Route path='/chat/:targetUserId' element={<Chat/>}/>
                <Route path='/premium' element={<PremiumInvite/>}/>
                <Route path='/premium/plans' element={<PremiumPlans/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;

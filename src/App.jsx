
import Body from './components/Body'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Profilee from './components/Profilee';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/Feed';

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
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;

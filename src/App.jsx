
import Body from './components/Body'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Profilee from './components/Profilee';

function App() {
  return (

    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<Body/>}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profilee/>}/>
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

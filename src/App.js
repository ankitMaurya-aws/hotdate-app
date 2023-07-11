import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Signup from './Dashboard/Signup_Login/Signup';
import Login from './Dashboard/Signup_Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

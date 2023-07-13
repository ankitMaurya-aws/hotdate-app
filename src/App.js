import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Signup from './Dashboard/Signup_Login/Signup';
import Login from './Dashboard/Signup_Login/Login';
import Layout from './Dashboard/Layout';
import EventPage from './Dashboard/MainDashboard/db_pages/EventPage';
import HomePage from './Dashboard/MainDashboard/db_pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/event' element={<EventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

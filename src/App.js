import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Signup from "./Dashboard/Signup_Login/Signup";
import Login from "./Dashboard/Signup_Login/Login";
import Layout from "./Dashboard/Layout";
import HomePage from "./Dashboard/MainDashboard/db_pages/HomePage";
import CreateEventPage from "./Dashboard/MainDashboard/db_pages/CreateEventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/create_event" element={<CreateEventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

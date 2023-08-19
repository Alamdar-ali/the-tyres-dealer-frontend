import React from "react";
import PageLayout from "./components/PageLayout";
import SignIn from "./components/SignIn";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/Signup";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
      <Footer />{" "}
    </Router>
  );
}

export default App;

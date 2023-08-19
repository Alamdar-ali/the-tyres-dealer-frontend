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

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Footer />{" "}
      <Routes>
        <Route path="/signin" Component={SignIn} />
      </Routes>
    </Router>
  );
}

export default App;

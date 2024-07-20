import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

//import des composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      {/*gérer la route et la navigation*/}
      {/* Header présent dans toutes les pages */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
      {/* Footer présent dans toutes les pages */}
    </Router>
  );
}

export default App;

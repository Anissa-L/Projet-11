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
      <div className="app-container">
        {/* Header présent dans toutes les pages */}
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
        {/* Footer présent dans toutes les pages */}
      </div>
    </Router>
  );
}

export default App;

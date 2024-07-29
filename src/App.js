import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";
import SidebarRight from "./components/sidebarRight/SidebarRight";
import ChatPopup from "./components/chatPopup/ChatPopup";
import FloatingButton from "./components/floatingButton/FloatingButton";

const App = () => {
  return (
    <BrowserRouter basename="my-app">
      <div className="app">
        <Navbar />
        <div className="main-content">
          <SidebarLeft />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <SidebarRight />
        </div>

        <ChatPopup />
        <FloatingButton />
      </div>
    </BrowserRouter>
  );
};

export default App;

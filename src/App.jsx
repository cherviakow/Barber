import "./App.css";
import Header from "./components/header/header";
// import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import { Team } from "./components/pages/Team/Team";
import Pricing from "./components/pages/Pricing/Pricing";
import Footer from "./components/footer/Footer";
// import { useState } from "react";
// import MainPage from "./components/mainPage/MainPage";
// import BookingBlock from "./components/booking/BookingBlock";

function App() {

  return (
    <>
      <div className="wrapImg" >
        <Header />
        <div className="content">
         
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<div>Not found page</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

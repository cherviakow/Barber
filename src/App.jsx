import "./App.css";
import Header from "./components/header/header";
// import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import { Team } from "./components/pages/Team/Team";
import Pricing from "./components/pages/Pricing/Pricing";
// import { useState } from "react";
// import MainPage from "./components/mainPage/MainPage";
// import BookingBlock from "./components/booking/BookingBlock";






function App() {
  const backgroundStyle = {
    height: "100vh",
    backgroundImage: 'url("./img/MainPictures.jpg")',
    backgroundSize: "cover",
backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    
    
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <> 
      <div  style={backgroundStyle}>
      
    
       
       
        <Header />
        <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<div>Not found page</div>}/>
      </Routes>
      {/* <button onClick={()=> setIsModalOpen(true)}>OPEN!!!!!</button> */}

{/* <BookingBlock isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/> */}

      </div>
    </>
  );
}

export default App;

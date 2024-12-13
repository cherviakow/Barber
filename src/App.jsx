import "./App.css";
import Header from "./components/header/header";
import Navigation from "./components/navigation/Navigation";
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

  return (
    <> 
      <div  style={backgroundStyle}>
      
    
       
       
        <Header />
        <Navigation /> 
        {/* <MainPage /> */}
        {/* <BookingBlock/> */}



      </div>
    </>
  );
}

export default App;

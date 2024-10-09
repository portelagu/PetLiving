import About from "./components/About/About";
import DataInformation from "./components/DataInformation/DataInformation";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Feedback from "./components/Feedback/Feedback"
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <DataInformation/>
      <Services/>
      <Feedback/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;

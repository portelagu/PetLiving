import About from "../components/About/About.jsx";
import DataInformation from "../components/DataInformation/DataInformation.jsx";
import Header from "../components/Header/Header.jsx";
import Home from "../components/Home/Home.jsx";
import Services from "../components/Services/Services.jsx";
import Feedback from "../components/Feedback/Feedback.jsx"
import ContactUs from "../components/ContactUs/ContactUs.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Homepage() {
    return (
        <div>
            <Header/>
            <Home />
            <section id="about"><About /></section>
            <section id="data-information"><DataInformation /></section>
            <section id="services"><Services /></section>
            <section id="feedback"><Feedback /></section>
            <section id="contact-us"><ContactUs /></section>
            <Footer />
        </div>
    )
}

export default Homepage;
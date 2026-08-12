import Hero from "../components/hero/Hero";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Services from "./Services";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import Appointment from "./Appointment/Appointment";
import About from "./About";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Testimonials />
      <Appointment />
      <Contact />
    </>
  );
};

export default Home;

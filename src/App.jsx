import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import GetInfromed from "./pages/GetInformed/GetInfromed";
const App = () => {
  return (
    <div className="w-full relative">
      <ContactUs />
      <Menu />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/getinformed" element={<GetInfromed />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

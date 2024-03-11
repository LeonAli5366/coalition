import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import State from "./pages/State/State";
import ContactUs from "./components/ContactUs/ContactUs";
const App = () => {
  return (
    <div className="w-full relative">
      <ContactUs />
      <Menu />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

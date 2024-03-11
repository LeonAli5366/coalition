import Header from "../../components/Header/Header";
import Info from "./Info/Info";
import Plans from "./Plans/Plans";
import Social from "./Social/Social";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
  return (
    <>
      <Header />
      <Info />
      {/* <Map/> */}
      <Plans />
      <Social />
      <Sponsor />
    </>
  );
};

export default Home;

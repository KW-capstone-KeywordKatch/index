import HomeNavBar from "./../component/GlobalNavigationBar/HomeNavBar";
import HomeKeyword from "../component/Home/HomeKeyword";
import { Routes, Route } from "react-router-dom";
import HomeTrend from "../component/Home/HomeTrend";
import HomeFollow from "../component/Home/HomeFollow/HomeFollow";

import HomeOption from "../component/Home/HomeOption";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <HomeNavBar />
      <Routes>
        <Route path="/" element={<HomeKeyword />} />
        <Route path="/trend" element={<HomeTrend />} />
        <Route path="/follow" element={<HomeFollow />} />
        <Route path="/option" element={<HomeOption />} />
      </Routes>
    </>
  );
};

export default HomePage;

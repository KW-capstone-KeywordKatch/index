import HomeNavBar from "./../component/GlobalNavigationBar/HomeNavBar";
import HomeKeyword from "../component/Home/HomeKeyword";
import { Routes, Route } from "react-router-dom";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <HomeNavBar />
      <Routes>
        <Route path="/keyword" element={<HomeKeyword />} />
      </Routes>
    </>
  );
};

export default HomePage;

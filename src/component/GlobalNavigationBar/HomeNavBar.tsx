import useVH from "react-viewport-height";
import FollowSvg from "../Icon/Svg/FollowSvg";
import ListSvg from "../Icon/Svg/ListSvg";
import OptionSvg from "../Icon/Svg/OptionSvg";
import SearchSvg from "../Icon/Svg/SearchSvg";
import TrendSvg from "../Icon/Svg/TrendSvg";
import { useLocation, useNavigate } from "react-router-dom";

const HomeNavBar: React.FunctionComponent = () => {
  const vh = useVH();
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[1];
  return (
    <nav
      className="fixed w-[60px] drop-shadow-xl bg-white flex flex-col items-center justify-between p-4"
      style={{
        height: 100 * vh,
      }}
    >
      <div className="cursor-pointer" onClick={() => navigate("/home/keyword")}>
        Logo
      </div>
      <div className="flex flex-col items-center">
        <SearchSvg
          className="my-[0.7em] cursor-pointer"
          fill={location === "search" ? "black" : "#707070"}
          onClick={() => navigate("search")}
        />
        <TrendSvg
          className="my-[0.7em] cursor-pointer"
          fill={location === "trend" ? "black" : "#707070"}
          onClick={() => navigate("trend")}
        />
        <FollowSvg
          className="my-[0.7em] cursor-pointer"
          fill={location === "follow" ? "black" : "#707070"}
          onClick={() => navigate("follow")}
        />
        <ListSvg
          className="my-[0.7em] cursor-pointer"
          fill={location === "keyword" ? "black" : "#707070"}
          onClick={() => navigate("keyword")}
        />
        <OptionSvg
          className="my-[0.7em] cursor-pointer"
          fill={location === "option" ? "black" : "#707070"}
          onClick={() => navigate("option")}
        />
      </div>
      <div className="bg-black w-[100%] aspect-square rounded-full"></div>
    </nav>
  );
};

export default HomeNavBar;

import { useNavigate } from "react-router-dom";
import LogoSvg from "../../Icon/Svg/LogoSvg";
import MenuSvg from "../../Icon/Svg/MenuSvg";

const IndexToolbar: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[1200px] h-[80px] flex items-center relative">
      <LogoSvg
        className="absolute left-0 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      ></LogoSvg>
      <div className="absolute right-0 flex flex-row gap-[20px] justify-items-center items-center">
        <p className="cursor-pointer">SIGN IN</p>
        <p className="cursor-pointer">SIGN UP</p>
        <p className="cursor-pointer">CONTRACT</p>
        <MenuSvg></MenuSvg>
      </div>
    </div>
  );
};

export default IndexToolbar;

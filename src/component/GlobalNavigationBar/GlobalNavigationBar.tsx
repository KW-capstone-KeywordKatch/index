import GridLayout from "./../Layout/GridLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { throttle } from "lodash";
import LogoSvg from "./../Icon/Svg/LogoSvg";
import MenuSvg from "../Icon/Svg/MenuSvg";

const GlobalNavigationBar: React.FunctionComponent = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigate = useNavigate();
  const handleWheel = (e: WheelEvent) => {
    if (!window.scrollY) {
      return;
    }

    if (e.deltaY > 0) {
      setHeaderHeight(64);
    } else {
      setHeaderHeight(0);
    }
  };
  const throttleHandle = throttle(handleWheel, 300);
  useEffect(() => {
    document.addEventListener("wheel", throttleHandle);
    return () => document.removeEventListener("wheel", throttleHandle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <nav
      className="fixed z-50 w-full h-[64px] bg-white flex items-center justify-center text-[0.875em] whitespace-pre origin-top duration-400"
      style={{
        transition: "0.4s ease",
        transform: `translateY(-${headerHeight}px)`,
        boxShadow: headerHeight ? "" : "0px 5px 5px rgba(0, 0, 0, 0.12)",
      }}
    >
      <GridLayout>
        <button className="justify-self-start" onClick={() => navigate("/")}>
          <LogoSvg />
        </button>

        <div className="col-start-12 justify-self-end w-[300px] flex items-center justify-between font-bold">
          <button onClick={() => navigate("/signin")}>SIGN IN</button>
          <button onClick={() => navigate("/signup")}>SIGN UP</button>
          <button onClick={() => navigate("/contact")}>CONTACT</button>
          <MenuSvg />
        </div>
      </GridLayout>
    </nav>
  );
};

export default GlobalNavigationBar;

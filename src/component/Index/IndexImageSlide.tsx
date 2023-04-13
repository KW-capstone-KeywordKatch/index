import { useEffect, useRef, useState } from "react";
import ArrowSvg from "../Icon/Svg/ArrowSvg";
import { throttle } from "lodash";
import GETMAIL from "../Icon/Img/GETMAIL.jpg";
import READINGNEWS from "../Icon/Img/READINGNEWS.jpg";

const IndexImageSlide: React.FunctionComponent = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const swipeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth || 0);
    };
    const throttleResize = throttle(handleResize, 50);
    window.addEventListener("resize", throttleResize);
    return () => window.removeEventListener("resize", throttleResize);
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="relative top-[64px] col-span-12">
      <div className="px-[5%]">
        <div className="whitespace-pre-line text-[4em] font-pretendardThin">
          {`NEWS\n내 메일을 통해 빠르게.`}
        </div>
        <div className="relative whitespace-pre-line font-bold text-[4em] z-30">
          KEYWORDKATCH
        </div>
      </div>
      <div
        ref={swipeRef}
        className="relative flex flex-col bottom-[calc(2em+15px)] bg-[#ff0000] bg-opacity-10 w-full h-[30em]"
      >
        <div className="absolute w-full h-full flex items-center overflow-hidden">
          <div className="absolute bg-white bg-opacity-30 w-full h-full z-10"></div>
          {[READINGNEWS, GETMAIL].map((src, index) => (
            <img
              className="blur-sm grayscale h-full object-cover ease-in-out duration-300"
              style={{
                minWidth: `${screenWidth}px`,
                transform: `translate3d(
                  ${selectedIdx * -screenWidth}px, 0px, 0px`,
              }}
              src={src}
              alt=""
              key={index}
            ></img>
          ))}
        </div>
        <div className="relative flex flex-row left-[calc(100%-8em-20px)] z-40">
          <button
            className="flex items-center justify-center w-[4em] h-[4em] bg-black mr-[1em]"
            onClick={() => {
              if (selectedIdx === 0) {
                setSelectedIdx(1);
              } else {
                setSelectedIdx(selectedIdx - 1);
              }
            }}
          >
            <ArrowSvg className="cursor-pointer" />
          </button>
          <button
            className="flex items-center justify-center w-[4em] h-[4em] bg-black z-50"
            onClick={() => {
              if (selectedIdx === 1) {
                setSelectedIdx(0);
              } else {
                setSelectedIdx(selectedIdx + 1);
              }
            }}
          >
            <ArrowSvg className="cursor-pointer" rotate={180} />
          </button>
        </div>
        <div className="relative z-40 left-[5%] top-[calc(50%-4em)] -translate-y-[50%] whitespace-pre-line font-pretendardThin font-bold ">
          {`KEYWORDKATCH 은 뉴스 기사를 \n메일을 통하여 매일 아침 \n원하는 기사를 읽을 수 있습니다.`}
        </div>
      </div>
    </div>
  );
};

export default IndexImageSlide;

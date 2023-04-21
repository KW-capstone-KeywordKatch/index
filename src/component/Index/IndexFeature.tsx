import { useNavigate } from "react-router-dom";

const IndexFeature: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="col-span-12 my-[20vh] flex items-center justify-between">
      <div className="w-[40%] flex flex-col font-bold">
        <p className="tracking-[0.3em]">ABOUT</p>
        <p
          style={{
            wordSpacing: "0.3em",
            lineHeight: "1em",
          }}
          className="text-[2em] whitespace-pre-line font-black space"
        >{`\nMAKE HABIT\nREAD NEWS\nKEYWORDKATCH\n\n`}</p>
        <p className="font-light text-[0.8em] break-keep  text-[#767676]">
          KeywordKatch는 기존 키워드 기반 뉴스 서비스의 단점인 많은 광고, 단순한
          키워드 포함유무로 인한 추천 등의 문제점을 탈피한 새로운 서비스 제공을
          추구합니다.
        </p>
        <button
          onClick={() => navigate("/signin")}
          className="my-[2em] w-[10em] h-[3em] text-[1em] bg-black text-white"
        >
          MORE
        </button>
      </div>
      <div className="relative right-[5%] w-[35%] grid grid-cols-2 gap-[2em] text-white text-[0.9em] font-bold">
        <div className="bg-black flex items-center justify-center rounded-full w-[100%] aspect-square">
          <div className="rounded-full w-[90%] border aspect-square border-[#767676] flex items-center justify-center">
            EMAIL
          </div>
        </div>
        <div className="bg-[#767676] flex items-center justify-center rounded-full w-[100%] aspect-square">
          <div className="rounded-full w-[90%] border aspect-square border-[#c0c0c0] flex items-center justify-center">
            KEYWORD
          </div>
        </div>
        <div className="bg-[#767676] flex items-center justify-center rounded-full w-[100%] aspect-square">
          <div className="rounded-full w-[90%] border aspect-square border-[#c0c0c0] flex items-center justify-center">
            CONVENIENT
          </div>
        </div>
        <div className="bg-black flex items-center justify-center rounded-full w-[100%] aspect-square">
          <div className="rounded-full w-[90%] border aspect-square border-[#767676] flex items-center justify-center">
            CLASSIFY
          </div>
        </div>
        <div className="absolute left-[50%] leading-none -translate-x-[50%] top-[50%] -translate-y-[50%]  text-black">
          <p>KEYWORD</p>
          <p
            className="text-[0.7em]"
            style={{
              letterSpacing: "0.85em",
            }}
          >
            KATCH
          </p>
        </div>
        <div className="absolute w-[80%] left-[10%] top-[10%] aspect-square border-[#c0c0c0] border-4 rotate-45 -z-10"></div>
      </div>
    </div>
  );
};

export default IndexFeature;

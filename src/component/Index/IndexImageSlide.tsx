const IndexImageSlide: React.FunctionComponent = () => {
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
      <div className="relative flex flex-col bottom-[calc(2em+15px)] bg-black bg-opacity-10 w-full h-[30em]">
        <div className="relative left-[calc(100%-8em-20px)] z-20">
          <button className="w-[4em] h-[4em] bg-slate-500 mr-[20px]"></button>
          <button className="w-[4em] h-[4em] bg-slate-500"></button>
        </div>
        <div className="relative left-[5%] top-[calc(50%-4em)] -translate-y-[50%] whitespace-pre-line font-pretendardThin font-bold ">
          {`KEYWORDKATCH 은 뉴스 기사를 \n메일을 통하여 매일 아침 \n원하는 기사를 읽게 합니다.`}
        </div>
      </div>
    </div>
  );
};

export default IndexImageSlide;

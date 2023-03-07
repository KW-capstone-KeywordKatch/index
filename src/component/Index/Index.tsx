import React from "react";
import TeamInfo from "./TeamInfo/TeamInfo";
import IndexToolbar from "./Toolbar/IndexToolbar";

const Index: React.FunctionComponent = () => {
  // 테스트용으로 넣음, 삭제 예정
  const renderNumber = () => {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
      8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ];
    return arr.map((num) => {
      return <div>{num}</div>;
    });
  };

  return (
    <React.Fragment>
      <div
        className="fixed top-0 w-full flex justify-center"
        style={{ boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.25)" }}
      >
        <IndexToolbar></IndexToolbar>
      </div>
      <div className="relative w-full h-full overflow-y-scroll bg-white drop-shadow-2xl flex flex-col items-center mt-[80px]">
        <div className="w-[1200px] grid grid-cols-1 gap-[20px]">
          {renderNumber()}
          {/* renderNumber 지우고 index page에 넣을 내용 추가 */}
        </div>
        <div className="w-full">
          <TeamInfo></TeamInfo>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;

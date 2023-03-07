const TeamInfo: React.FunctionComponent = () => {
  const renderTeamInfo = (infoName: string, infoData: string) => {
    return (
      <div className="w-fit text-[#FFFFFF] flex flex-row text-start">
        <p className="w-[100px]">{infoName}</p>
        <p className="w-[10px]">:</p>
        <p className="pl-[20px]">{infoData}</p>
      </div>
    );
  };

  return (
    <div className="w-full h-[150px] bg-black flex items-center justify-center  ">
      <div className="flex flex-col gap-[10px] w-[1200px]">
        {renderTeamInfo("전화번호", "010-9570-1530")}
        {renderTeamInfo("E-mail", "rmstjd333@gmail.com")}
        {renderTeamInfo("비상연락처", " empty")}
      </div>
    </div>
  );
};

export default TeamInfo;

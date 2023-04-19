import { useUserInfo } from "../../State/UserInfo";
import GridLayout from "../Layout/GridLayout";

const HomeOption: React.FunctionComponent = () => {
  const userInfo = useUserInfo();
  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <button
          className="col-span-3"
          onClick={() => {
            userInfo.setInterests([]);
            userInfo.setToken("");
            userInfo.setUserId("");
            userInfo.setIsLoggined(false);
          }}
        >
          로그아웃
        </button>
        <button
          className="col-span-3"
          onClick={() => {
            //여기다가 작성하세요
          }}
        >
          이메일 전송하기
        </button>
      </GridLayout>
    </main>
  );
};

export default HomeOption;

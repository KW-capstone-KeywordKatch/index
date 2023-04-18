import { useUserInfo } from "../../State/UserInfo";
import GridLayout from "../Layout/GridLayout";

const HomeOption: React.FunctionComponent = () => {
  const userInfo = useUserInfo();
  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <button
          onClick={() => {
            userInfo.setInterests([]);
            userInfo.setToken("");
            userInfo.setUserId("");
            userInfo.setIsLoggined(false);
          }}
        >
          로그아웃
        </button>
      </GridLayout>
    </main>
  );
};

export default HomeOption;

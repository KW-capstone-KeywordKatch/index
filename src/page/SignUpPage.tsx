import { useUserInfo } from "../State/UserInfo";
import GlobalNavigationBar from "./../component/GlobalNavigationBar/GlobalNavigationBar";
import SignUp from "./../component/SignUp/SignUp";
import HomePage from "./HomePage";

const SignUpPage: React.FunctionComponent = () => {
  const userInfo = useUserInfo();

  if (userInfo.isLoggined) {
    return (
      <>
        <HomePage />
      </>
    );
  }
  return (
    <>
      <GlobalNavigationBar />
      <SignUp />
    </>
  );
};

export default SignUpPage;

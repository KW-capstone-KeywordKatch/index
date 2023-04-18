import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../State/UserInfo";

const RedirectTo = (LoginState: boolean, path: string) => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  console.log(userInfo.isLoggined, LoginState);
  if (userInfo.isLoggined !== LoginState) {
    console.log(userInfo.isLoggined !== LoginState);
    navigate(path);
  }
};

export default RedirectTo;

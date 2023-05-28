import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import checkPassword from "../CheckUserInfo/checkPassword";
import checkEmail from "../CheckUserInfo/checkEmail";
import { useUserInfo } from "../../State/UserInfo";
import { SignInRequest } from "../API/SignInOut";

const LoginItems: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const getUserInfo = useRef({ email: "", password: "" });
  const userInfo = useUserInfo();

  const location = useLocation();
  const from = location.state?.redirectedFrom || "/";

  const submitUserInfo = () => {
    if (
      checkEmail(getUserInfo.current.email) &&
      checkPassword(getUserInfo.current.password)
    ) {
      SignInRequest(getUserInfo.current.email, getUserInfo.current.password)
        .then((res) => {
          if (res.data.code === 1000) {
            userInfo.setUserInfo({ ...res.data.payload, isLoggined: true });
            navigate(from);
          } else if (res.data.code === 2002) {
            alert("가입되지 않은 이메일 입니다.");
          } else if (res.data.code === 2003) {
            alert("비밀번호가 일치하지 않습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="relative col-start-1 col-end-5 top-[20vh] flex flex-col text-black">
        <div className="font-bold text-[2em]">SIGN IN</div>
        <div className="mt-[10%]">
          <p className="text-[0.8em] text-[#767676]">이메일</p>
          <input
            className="outline-0 border border-[#767676] w-full p-4 rounded-[10px]"
            onChange={(e) => {
              getUserInfo.current.email = e.target.value;
            }}
          ></input>
        </div>
        <div className="">
          <p className="text-[0.8em] text-[#767676]">비밀번호</p>
          <input
            type="password"
            className="outline-0 border border-[#767676] w-full p-4 rounded-[10px]"
            onChange={(e) => {
              getUserInfo.current.password = e.target.value;
            }}
          ></input>
        </div>
        <div className="w-full flex items-center justify-between my-[1em]">
          <div className="flex items-center text-[0.8em] ml-[1em] text-[#767676]">
            <button className="ml-[1em]">비밀번호 찾기</button>
          </div>
          <button
            className="rounded-[10px] font-bold text-white bg-black px-4 py-2"
            onClick={() => submitUserInfo()}
          >
            로그인
          </button>
        </div>
        <div className="w-full border-t border-[#767676]"></div>
        <button
          className="my-[2em] text-[#767676] text-[0.8em] relative left-[50%] -translate-x-[50%]"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </button>
      </div>
      <div className="relative top-[20vh] col-start-9 col-end-13 aspect-square bg-slate-300"></div>
    </>
  );
};

export default LoginItems;

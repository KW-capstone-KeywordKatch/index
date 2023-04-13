import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import checkID from "../CheckUserInfo/checkID";
import checkPassword from "../CheckUserInfo/checkPassword";

const LoginItems: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const userInfo = useRef({ ID: "", password: "" });

  const submitUserInfo = () => {
    if (
      checkID(userInfo.current.ID) &&
      checkPassword(userInfo.current.password)
    ) {
      //여기서 Fetch로 서버에 로그인 요청을 보내고 성공하면 홈페이지로 이동
      console.log("로그인 성공");
    }
  };

  return (
    <>
      <div className="relative col-start-1 col-end-5 top-[20vh] flex flex-col text-black">
        <div className="font-bold text-[2em]">SIGN IN</div>
        <div className="mt-[10%]">
          <p className="text-[0.8em] text-[#767676]">아이디</p>
          <input
            className="outline-0 border border-[#767676] w-full p-4 rounded-[10px]"
            onChange={(e) => {
              userInfo.current.ID = e.target.value;
            }}
          ></input>
        </div>
        <div className="">
          <p className="text-[0.8em] text-[#767676]">비밀번호</p>
          <input
            type="password"
            className="outline-0 border border-[#767676] w-full p-4 rounded-[10px]"
            onChange={(e) => {
              userInfo.current.password = e.target.value;
            }}
          ></input>
        </div>
        <div className="w-full flex items-center justify-between my-[1em]">
          <div className="flex items-center text-[0.8em] ml-[1em] text-[#767676]">
            <button>아이디 찾기</button>
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

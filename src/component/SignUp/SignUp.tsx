import GridLayout from "../Layout/GridLayout";
import useVH from "react-viewport-height";
import SignInFooter from "../Footer/SignInFooter";
import { useState } from "react";
import checkEmail from "../CheckUserInfo/checkEmail";
import checkID from "../CheckUserInfo/checkID";
import checkPassword from "../CheckUserInfo/checkPassword";

const SignUp: React.FunctionComponent = () => {
  const vh = useVH();
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    email: "",
    vaildPassword: "",
  });

  const submitUserInfo = () => {
    if (userInfo.password !== userInfo.vaildPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (
      checkEmail(userInfo.email) &&
      checkID(userInfo.id) &&
      checkPassword(userInfo.password)
    ) {
      alert("회원가입이 완료되었습니다.");
    }
  };

  return (
    <main
      className="relative top-[64px] flex items-center justify-center"
      style={{ height: 100 * vh - 64 }}
    >
      <GridLayout className="place-items-center justify-items-start">
        <div className="text-[2em] font-bold col-span-12 justify-self-start">
          SIGN UP
        </div>
        <div className="col-start-3 col-end-5">이메일</div>
        <input
          className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo({ ...userInfo, email: e.target.value });
          }}
        ></input>
        <div className="col-start-3 col-end-5">아이디</div>
        <input
          className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"
          value={userInfo.id}
          onChange={(e) => {
            setUserInfo({ ...userInfo, id: e.target.value });
          }}
        ></input>
        <div className="col-start-3 col-end-5">비밀번호</div>
        <input
          type="password"
          className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo({ ...userInfo, password: e.target.value });
          }}
        ></input>
        <div className="col-start-3 col-end-5">비밀번호 확인</div>
        <input
          type="password"
          className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"
          value={userInfo.vaildPassword}
          onChange={(e) => {
            setUserInfo({ ...userInfo, vaildPassword: e.target.value });
          }}
        ></input>
        <div className=" col-start-2 col-end-12 w-full border-t my-[2em]"></div>
        <div className="col-start-5 col-end-9 w-full">
          <p className="text-[12px] text-[#767676] flex flex-col items-center">
            비밀번호는 숫자,영어 포합 8자 이상이여야 합니다.
          </p>
          <div className="flex items-center w-full justify-between my-4">
            <button
              className="border font-bold w-full mr-[20px] px-4 py-2 rounded-[15px]"
              onClick={() =>
                setUserInfo({
                  id: "",
                  password: "",
                  email: "",
                  vaildPassword: "",
                })
              }
            >
              초기화
            </button>
            <button
              onClick={() => submitUserInfo()}
              className="border font-bold w-full px-4 py-2 rounded-[15px]  text-white bg-black"
            >
              회원가입
            </button>
          </div>
        </div>
      </GridLayout>
      <SignInFooter />
    </main>
  );
};

export default SignUp;

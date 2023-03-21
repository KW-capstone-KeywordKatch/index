import GridLayout from "../Layout/GridLayout";
import useVH from "react-viewport-height";
import SignInFooter from "../Footer/SignInFooter";

const SignUp: React.FunctionComponent = () => {
  const vh = useVH();
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
        <input className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"></input>
        <div className="col-start-3 col-end-5">아이디</div>
        <input className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"></input>
        <div className="col-start-3 col-end-5">비밀번호</div>
        <input className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"></input>
        <div className="col-start-3 col-end-5">비밀번호 확인</div>
        <input className="col-start-5 col-end-9 outline-0 rounded-[10px] border p-4 w-full"></input>
        <div className=" col-start-2 col-end-12 w-full border-t my-[2em]"></div>
        <div className="col-start-5 col-end-9 w-full">
          <p className="text-[12px] text-[#767676] flex flex-col items-center">
            비밀번호는 숫자,영어 포합 8자 이상이여야 합니다.
          </p>
          <div className="flex items-center w-full justify-between my-4">
            <button className="border font-bold w-full mr-[20px] px-4 py-2 rounded-[15px]">
              초기화
            </button>
            <button className="border font-bold w-full px-4 py-2 rounded-[15px]  text-white bg-black">
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

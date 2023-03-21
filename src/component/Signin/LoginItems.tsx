const LoginItems: React.FunctionComponent = () => {
  return (
    <>
      <div className="relative col-start-1 col-end-5 top-[20vh] flex flex-col text-black">
        <div className="font-bold text-[2em]">SIGN IN</div>
        <div className="mt-[10%]">
          <p className="text-[0.8em] text-[#767676]">아이디</p>
          <input className="outline-0 border border-[#767676] w-full p-4 rounded-[10px]"></input>
        </div>
        <div className="">
          <p className="text-[0.8em] text-[#767676]">비밀번호</p>
          <input className="outline-0 border border-[#767676] w-full p-4 rounded-[10px]"></input>
        </div>
        <div className="w-full flex items-center justify-between my-[1em]">
          <div className="flex items-center text-[0.8em] ml-[1em] text-[#767676]">
            <button>아이디 찾기</button>
            <button className="ml-[1em]">비밀번호 찾기</button>
          </div>
          <button className="rounded-[10px] font-bold text-white bg-black px-4 py-2">
            로그인
          </button>
        </div>
        <div className="w-full border-t border-[#767676]"></div>
        <button className="my-[2em] text-[#767676] text-[0.8em] relative left-[50%] -translate-x-[50%]">
          회원가입
        </button>
      </div>
      <div className="relative top-[20vh] col-start-9 col-end-13 aspect-square bg-slate-300"></div>
    </>
  );
};

export default LoginItems;

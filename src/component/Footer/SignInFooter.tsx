const SignInFooter: React.FunctionComponent = () => {
  return (
    <footer className="absolute bottom-[0%] border-t maxwidth:w-[1440px] w-[calc(100vw-80px)] h-[64px] flex items-center justify-between text-[12px]">
      <button>KEYWORDKATCH</button>
      <div className="flex items-center">
        <button>공지사항</button>
      </div>
      <button>광운대학교</button>
    </footer>
  );
};

export default SignInFooter;

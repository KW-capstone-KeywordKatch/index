import useVH from "react-viewport-height";

const Index: React.FunctionComponent = () => {
  const vh = useVH();
  return (
    <div
      className="bg-white w-screen flex items-center justify-center p-[50px]"
      style={{
        height: 100 * vh,
      }}
    >
      <div className="w-full h-full rounded-[15px] bg-white drop-shadow-2xl flex flex-col items-center justify-center">
        환영합니다!
      </div>
    </div>
  );
};

export default Index;

import GridLayout from "../Layout/GridLayout";

const HomeTrend: React.FunctionComponent = () => {
  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <div className="col-start-1 col-end-13 w-full">
          <p className="text-[2em] font-bold">트렌드 키워드</p>
          <p className="text-[#767676] text-[0.8em]">
            요즘 인기있는 키워드를 알아보세요.
          </p>
        </div>
        <div
          className="col-start-1 col-end-13 w-full bg-white drop-shadow-xl rounded-[20px] p-8 grid grid-cols-2"
          style={{
            gridTemplateRows: "(10, minmax(0, 1fr))",
          }}
        >
          {Array(20)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                style={{ order: idx < 10 ? 2 * idx + 1 : 2 * idx - 18 }}
                className="my-[1em]"
              >
                {idx + 1}
              </div>
            ))}
        </div>
      </GridLayout>
    </main>
  );
};

export default HomeTrend;

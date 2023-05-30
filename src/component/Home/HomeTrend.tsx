import GridLayout from "../Layout/GridLayout";
import { useEffect } from "react";
import { useState } from "react";
import { sendGetHotKeywordRequest } from "../API/homeAPI";

const HomeTrend: React.FunctionComponent = () => {
  const [trendList, setTrendList] = useState<string[]>([]);
  useEffect(() => {
    const trendList = sessionStorage.getItem("trendList");
    if (!trendList) {
      sendGetHotKeywordRequest().then((res) => {
        if (res.data.code === 1000) {
          sessionStorage.setItem("trendList", JSON.stringify(res.data.payload));
          setTrendList(res.data.payload);
        }
      });
    } else {
      setTrendList(JSON.parse(trendList));
    }
  }, []);
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
          className="col-start-1 col-end-13 w-full bg-white drop-shadow-xl rounded-[20px] p-8 grid grid-flow-col gap-8"
          style={{
            gridTemplateRows: "repeat(10, minmax(0, 1fr))",
          }}
        >
          {trendList.map((keyword, idx) => (
            <div key={idx} className="w-full flex items-center justify-between">
              <p>{`${idx + 1}.`}</p>
              <p>{keyword}</p>
            </div>
          ))}
        </div>
      </GridLayout>
    </main>
  );
};

export default HomeTrend;

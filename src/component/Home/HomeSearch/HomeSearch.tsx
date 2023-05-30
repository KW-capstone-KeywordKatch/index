/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import GridLayout from "../../Layout/GridLayout";
import { sendGetSearchResultRequest } from "../../API/homeAPI";
import { useCallback } from "react";
import { debounce } from "lodash";

const HomeSearch: React.FunctionComponent = () => {
  const [newsList, setNewsList] = useState<Record<string, string>[]>([]);

  const handleSearch = useCallback(
    debounce((keyword: string) => {
      console.log("handleSearch");
      sendGetSearchResultRequest(keyword).then((res) => {
        if (res.data.payload) {
          setNewsList([...res.data.payload]);
        }
      });
    }, 500),
    []
  );

  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <div className="relative col-start-1 col-end-13 w-full flex flex-col">
          <p className="text-[2em] font-bold">뉴스 검색</p>
          <p className="text-[#767676] text-[0.8em]">
            쉽고 편하게 뉴스를 검색하세요.
          </p>
        </div>
        <input
          placeholder="키워드를 입력하세요."
          onChange={(e) => {
            if (e.target.value.length > 0) {
              handleSearch(e.target.value);
            } else {
              setNewsList([]);
            }
          }}
          className="my-[2em] px-4 py-2 outline-0 border rounded-[10px] col-start-1 col-end-7 w-full"
        ></input>
        {newsList.length > 0 ? (
          <>
            {newsList?.map((news: any, idx) => (
              <div
                key={idx}
                className="col-start-1 col-end-13 w-full flex flex-row items-center cursor-pointer"
                onClick={() =>
                  window.open(news.link, "_blank", "noopener, noreferrer")
                }
              >
                <div>
                  <p className="font-bold text-[1.5em]">{news.title}</p>
                  <p className="text-[#767676] text-[0.8em]">{news.company}</p>
                  <p
                    className="text-[#767676] text-[0.8em] w-full overflow-hidden "
                    style={{
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      display: "-webkit-box",
                    }}
                  >
                    {news.content}
                  </p>
                </div>
                <img
                  alt=""
                  src={news.image}
                  className="max-w-[200px] max-h-[200px]"
                  style={{
                    margin: idx % 2 ? "0px 2em 0px 0px" : "0px 0px 0px 2em",
                  }}
                ></img>
              </div>
            ))}
          </>
        ) : (
          <div className="col-start-1 col-end-13 flex flex-col items-center justify-center mt-8 text-[2em] ">
            조회된 뉴스가 없습니다.
          </div>
        )}
      </GridLayout>
    </main>
  );
};

export default HomeSearch;

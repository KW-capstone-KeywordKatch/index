/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState } from "react";
import GridLayout from "../../Layout/GridLayout";
import { sendGetSearchResultRequest } from "../../API/homeAPI";
import { useCallback } from "react";
import { debounce } from "lodash";
import NewsItem from "../HomeFollow/NewsItem";

const HomeSearch: React.FunctionComponent = () => {
  const [newsList, setNewsList] = useState<Record<string, string>[]>([]);
  const [index, setIndex] = useState(4);
  const observer = useRef<IntersectionObserver>();

  const onObserverChanged = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (e) => {
          if (e[0].isIntersecting) {
            setIndex(index + 4);
          }
        },
        { threshold: 0.4 }
      );
      if (node) {
        observer.current.observe(node);
      }
    },
    [index, observer]
  );

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
            {newsList
              ?.filter((_, idx) => idx <= index)
              .map((news: any, idx) => (
                <NewsItem
                  ref={idx === index - 1 ? onObserverChanged : null}
                  news={news}
                  key={idx}
                  idx={idx}
                />
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

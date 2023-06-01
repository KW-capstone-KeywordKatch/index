/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import GridLayout from "../../Layout/GridLayout";
import { sendGetMyNewsListRequest } from "../../API/homeAPI";
import HomeFollowDropDown from "./HomeFollowDropDown";
import NewsItem, { news } from "./NewsItem";

const HomeFollow: React.FunctionComponent = () => {
  const [selelctedKeyword, setSelectedKeyword] = useState<string>("");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [newsList, setNewsList] = useState<Record<string, []>>({});

  useEffect(() => {
    const storageNewsList = sessionStorage.getItem("newsList");
    if (!storageNewsList) {
      sendGetMyNewsListRequest()
        .then((res) => {
          console.log(res);
          setKeywordList(Object.keys(res.data));
          setSelectedKeyword(Object.keys(res.data)[0]);
          setNewsList({ ...res.data });
          sessionStorage.setItem("newsList", JSON.stringify(res.data));
        })
        .catch(() => {
          alert("로딩에 실패했습니다.");
        });
    } else {
      setKeywordList(Object.keys(JSON.parse(storageNewsList)));
      setSelectedKeyword(Object.keys(JSON.parse(storageNewsList))[0]);
      setNewsList({ ...JSON.parse(storageNewsList) });
    }
  }, []);

  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <div className="relative col-start-1 col-end-13 w-full flex flex-col">
          <p className="text-[2em] font-bold">팔로우 중인 뉴스</p>
          <p className="text-[#767676] text-[0.8em]">
            저장한 키워드, 언론사를 기반으로 뉴스를 추천해드립니다.
          </p>
          <HomeFollowDropDown
            selectedKeyword={selelctedKeyword}
            keywordList={keywordList}
            onClick={(selectedKeyword) => setSelectedKeyword(selectedKeyword)}
          />
        </div>
        {Object.keys(newsList).length > 0 ? (
          <>
            {newsList[selelctedKeyword]?.map((news: news, idx) => (
              <NewsItem news={news} key={idx} idx={idx} />
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

export default HomeFollow;

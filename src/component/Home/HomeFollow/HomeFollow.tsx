import { useState, useEffect } from "react";
import { useUserInfo } from "../../../State/UserInfo";
import GridLayout from "../../Layout/GridLayout";
import { sendGetMyNewsListRequest } from "../../API/homeAPI";
import HomeFollowDropDown from "./HomeFollowDropDown";

const HomeFollow: React.FunctionComponent = () => {
  const userInfo = useUserInfo();
  const [selelctedKeyword, setSelectedKeyword] = useState<string>("");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [newsList, setNewsList] = useState<{ [x: string]: [] }>({});

  useEffect(() => {
    const storageNewsList = sessionStorage.getItem("newsList");
    if (!storageNewsList) {
      sendGetMyNewsListRequest()
        .then((res) => {
          setKeywordList(Object.keys(res.data));
          setSelectedKeyword(Object.keys(res.data)[0]);
          setNewsList({ ...res.data });
          sessionStorage.setItem("newsList", JSON.stringify(res.data));
        })
        .catch((err) => {
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
            onClick={setSelectedKeyword}
          />
        </div>

        {newsList[selelctedKeyword]?.map((news: any, idx) => (
          <div
            key={idx}
            className="col-start-1 col-end-13 w-full flex flex-row items-center cursor-pointer"
            style={{
              flexDirection: idx % 2 ? "row-reverse" : "row",
            }}
            onClick={() =>
              window.open(news[6], "_blank", "noopener, noreferrer")
            }
          >
            <div>
              <p className="font-bold text-[1.5em]">{news[3]}</p>
              <p className="text-[#767676] text-[0.8em]">{news[2]}</p>
              <p
                className="text-[#767676] text-[0.8em] w-full overflow-hidden "
                style={{
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  display: "-webkit-box",
                }}
              >
                {news[4]}
              </p>
            </div>
            <img
              alt=""
              src={news[5]}
              className="h-[15em]"
              style={{
                margin: idx % 2 ? "0px 2em 0px 0px" : "0px 0px 0px 2em",
              }}
            ></img>
          </div>
        ))}
      </GridLayout>
    </main>
  );
};

export default HomeFollow;

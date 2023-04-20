import { useState } from "react";
import { useUserInfo } from "../../State/UserInfo";
import GridLayout from "../Layout/GridLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getProxy from "../../State/proxy";

const HomeOption: React.FunctionComponent = () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  const [newsList, setNewsList] = useState<{ title: string; link: string }[]>([
    { title: "", link: "" },
  ]);

  const getKeywordNews = () => {
    axios
      .get(`${getProxy("/test")}/prototype/${keyword}`)
      .then((res) => {
        if (res.data.code === 1) {
          setNewsList(res.data.payload);
        } else {
          setNewsList([]);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <button
          className="col-span-3"
          onClick={() => {
            userInfo.setInterests([]);
            userInfo.setToken("");
            userInfo.setUserId("");
            userInfo.setIsLoggined(false);
            navigate("/");
          }}
        >
          로그아웃
        </button>
        <div className="col-span-6"></div>
        <div className="col-span-12 flex flex-col">
          <input
            value={keyword}
            className="p-4 border outline-none"
            placeholder="테스트 키워드 입력"
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getKeywordNews();
              }
            }}
          ></input>
          {newsList.length > 0 ? (
            newsList.map((news, idx) => (
              <a href={news.link} key={idx} className="my-[0.5em] font-bold">
                {news.title}
              </a>
            ))
          ) : (
            <div>뉴스가 없습니다.</div>
          )}
        </div>
      </GridLayout>
    </main>
  );
};

export default HomeOption;

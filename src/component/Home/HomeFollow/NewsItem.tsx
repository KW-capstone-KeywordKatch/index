import { forwardRef } from "react";

export interface news {
  title: string;
  company: string;
  content: string;
  image: string;
  link: string;
  press: string;
}

interface NewsItemProps {
  news: news;
  idx: number;
}

const NewsItem = forwardRef(
  (
    { news, idx }: NewsItemProps,
    divRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={divRef}
        className="col-start-1 col-end-13 w-full flex flex-row items-center cursor-pointer"
        style={{
          flexDirection: idx % 2 ? "row-reverse" : "row",
        }}
        onClick={() => window.open(news.link, "_blank", "noopener, noreferrer")}
      >
        <div>
          <p className="font-bold text-[1.5em]">{news.title}</p>
          <p className="text-[#767676] text-[0.8em]">
            {news.company || news.press}
          </p>
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
    );
  }
);

export default NewsItem;

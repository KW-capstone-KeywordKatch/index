import GridLayout from "../Layout/GridLayout";

const HomeKeyword: React.FunctionComponent = () => {
  const testItem = [
    {
      title: "2월 외국인 국내주식 1조2000억 순매수…5개월째 '사자'",
      press: "NEWSIS",
      content:
        "[서울=뉴시스]우연수 기자 = 외국인이 국내 주식시장에서 지난달까지 5개월째 순매수를 이어갔다.9일 금융감독원에 따르면 외국인은 지난달 국내 상장 주식을 1조1690억원 순매수했다. 9일 금융감독원에 따르면 외국인은 지난달 국내 상장 주식을 1조1690억원 순매수했다. 유가증권시장에서는 5350억원을, 코스닥 시장에서 6340억원을 사들였다. 지난달 말 기준 보유 상장 주식은 635조1000억원으로 집계됐다. 전체 시가총액의 26.7% 수준이다. 지역별로 유럽(2조4000억원)과 미주(1000억원) 지역 등에서 순매수했으며, 아시아(1조5000억원)와 중동(2000억원) 지역은 순매도했다.",
    },
    {
      title: "2월 외국인 국내주식 1조2000억 순매수…5개월째 '사자'",
      press: "NEWSIS",
      content:
        "[서울=뉴시스]우연수 기자 = 외국인이 국내 주식시장에서 지난달까지 5개월째 순매수를 이어갔다.9일 금융감독원에 따르면 외국인은 지난달 국내 상장 주식을 1조1690억원 순매수했다. 9일 금융감독원에 따르면 외국인은 지난달 국내 상장 주식을 1조1690억원 순매수했다. 유가증권시장에서는 5350억원을, 코스닥 시장에서 6340억원을 사들였다. 지난달 말 기준 보유 상장 주식은 635조1000억원으로 집계됐다. 전체 시가총액의 26.7% 수준이다. 지역별로 유럽(2조4000억원)과 미주(1000억원) 지역 등에서 순매수했으며, 아시아(1조5000억원)와 중동(2000억원) 지역은 순매도했다.",
    },
    {
      title: "2월 외국인 국내주식 1조2000억 순매수…5개월째 '사자'",
      press: "NEWSIS",
      content:
        "[서울=뉴시스]우연수 기자 = 외국인이 국내 주식시장에서 지난달까지 5개월째 순매수를 이어갔다.9일 금융감독원에 따르면 외국인은 지난달 국내 상장 주식을 1조1690억원 순매수했다. 9일 금융감독원에 따르면 외국인은 지난달 국내 상장 주식을 1조1690억원 순매수했다. 유가증권시장에서는 5350억원을, 코스닥 시장에서 6340억원을 사들였다. 지난달 말 기준 보유 상장 주식은 635조1000억원으로 집계됐다. 전체 시가총액의 26.7% 수준이다. 지역별로 유럽(2조4000억원)과 미주(1000억원) 지역 등에서 순매수했으며, 아시아(1조5000억원)와 중동(2000억원) 지역은 순매도했다.",
    },
  ];
  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <div className="col-start-1 col-end-13 w-full">
          <p className="text-[2em] font-bold">키워드 추가</p>
          <p className="text-[#767676] text-[0.8em]">
            키워드를 입력하여 원하는 키워드의 소식을 받으세요.
          </p>
        </div>
        <input
          placeholder="키워드를 입력하세요."
          className="my-[2em] px-4 py-2 outline-0 border rounded-[10px] col-start-1 col-end-7 w-full"
        ></input>
        {testItem.map((item, idx) => (
          <div key={idx} className="col-start-1 col-end-13 w-full ">
            <p className="font-bold text-[1.5em]">{item.title}</p>
            <p className="text-[#767676] text-[0.8em]">{item.press}</p>
            <p
              className="text-[#767676] text-[0.8em] w-full overflow-hidden "
              style={{
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
              }}
            >
              {item.content}
            </p>
          </div>
        ))}
      </GridLayout>
    </main>
  );
};

export default HomeKeyword;

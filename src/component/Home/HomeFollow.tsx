import { useUserInfo } from "../../State/UserInfo";
import GridLayout from "./../Layout/GridLayout";

const HomeFollow: React.FunctionComponent = () => {
  const userInfo = useUserInfo();

  console.log(userInfo);
  const testItem = [
    {
      title: "폭스바겐, 전기차 ID.3 부분변경 공개…국내 출시 미정",
      img: "https://biz.chosun.com/resizer/AKZZaGr0071WBB3PaOhm27g98xI=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/WXE2BLSFKNDQHN6J3SN6XRN72Y.jpg",
      press: "한국경제",
      content:
        "폭스바겐은 지난 1일(현지시각) 독일에서 전기차 ID.3의 페이스리프트(부분변경) 모델을 공개했다고 7일 밝혔다. ID.3는 2019년 9월 독일 프랑크푸르트 모터쇼에서 공개한 폭스바겐 ID 시리즈의 첫 번째 차량이다. 양산은 2020년 9월부터 시작했다. 신형 ID.3는 양산 시점을 기준으로 2년 6개월여 만에 페이스리프트로 출시된다. ID.3는 국내 출시되지 않은 모델로, 폭스바겐코리아에 따르면 이번 신형 ID.3도 국내 출시는 미정이다. 신형 ID.3는 전면 범퍼와 공기 흡입구를 넓혔다. 다크 올리빈 그린 등 새로운 외장 색상을 추가했다. 인테리어의 모든 부분을 비동물성 소재로 썼다. 실내는 5.3인치 운전자 디스플레이와 12인치 터치식 디스플레이를 탑재했다. 신형 ID.3는 충전소에 충전 케이블이 꽂혀 있을 때 차량이 스스로 인증해 충전을 시작하는 ‘플러그 앤 차지(Plug&Charge)’ 기능을 지원한다. 장거리 주행 시 가능한 한 빨리 목적지에 도달할 수 있도록 배터리양과 교통 정보, 예측 정보를 활용해 충전 장소를 계산하는 ‘지능형 EV루트 플래너’ 기능도 장착했다. 무선 업데이트(OTA) 이용이 가능하다.",
    },
    {
      title: "폭스바겐, 전기차 ID.3 부분변경 공개…국내 출시 미정",
      img: "https://biz.chosun.com/resizer/AKZZaGr0071WBB3PaOhm27g98xI=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/WXE2BLSFKNDQHN6J3SN6XRN72Y.jpg",
      press: "한국경제",
      content:
        "폭스바겐은 지난 1일(현지시각) 독일에서 전기차 ID.3의 페이스리프트(부분변경) 모델을 공개했다고 7일 밝혔다. ID.3는 2019년 9월 독일 프랑크푸르트 모터쇼에서 공개한 폭스바겐 ID 시리즈의 첫 번째 차량이다. 양산은 2020년 9월부터 시작했다. 신형 ID.3는 양산 시점을 기준으로 2년 6개월여 만에 페이스리프트로 출시된다. ID.3는 국내 출시되지 않은 모델로, 폭스바겐코리아에 따르면 이번 신형 ID.3도 국내 출시는 미정이다. 신형 ID.3는 전면 범퍼와 공기 흡입구를 넓혔다. 다크 올리빈 그린 등 새로운 외장 색상을 추가했다. 인테리어의 모든 부분을 비동물성 소재로 썼다. 실내는 5.3인치 운전자 디스플레이와 12인치 터치식 디스플레이를 탑재했다. 신형 ID.3는 충전소에 충전 케이블이 꽂혀 있을 때 차량이 스스로 인증해 충전을 시작하는 ‘플러그 앤 차지(Plug&Charge)’ 기능을 지원한다. 장거리 주행 시 가능한 한 빨리 목적지에 도달할 수 있도록 배터리양과 교통 정보, 예측 정보를 활용해 충전 장소를 계산하는 ‘지능형 EV루트 플래너’ 기능도 장착했다. 무선 업데이트(OTA) 이용이 가능하다.",
    },
    {
      title: "폭스바겐, 전기차 ID.3 부분변경 공개…국내 출시 미정",
      img: "https://biz.chosun.com/resizer/AKZZaGr0071WBB3PaOhm27g98xI=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/WXE2BLSFKNDQHN6J3SN6XRN72Y.jpg",
      press: "한국경제",
      content:
        "폭스바겐은 지난 1일(현지시각) 독일에서 전기차 ID.3의 페이스리프트(부분변경) 모델을 공개했다고 7일 밝혔다. ID.3는 2019년 9월 독일 프랑크푸르트 모터쇼에서 공개한 폭스바겐 ID 시리즈의 첫 번째 차량이다. 양산은 2020년 9월부터 시작했다. 신형 ID.3는 양산 시점을 기준으로 2년 6개월여 만에 페이스리프트로 출시된다. ID.3는 국내 출시되지 않은 모델로, 폭스바겐코리아에 따르면 이번 신형 ID.3도 국내 출시는 미정이다. 신형 ID.3는 전면 범퍼와 공기 흡입구를 넓혔다. 다크 올리빈 그린 등 새로운 외장 색상을 추가했다. 인테리어의 모든 부분을 비동물성 소재로 썼다. 실내는 5.3인치 운전자 디스플레이와 12인치 터치식 디스플레이를 탑재했다. 신형 ID.3는 충전소에 충전 케이블이 꽂혀 있을 때 차량이 스스로 인증해 충전을 시작하는 ‘플러그 앤 차지(Plug&Charge)’ 기능을 지원한다. 장거리 주행 시 가능한 한 빨리 목적지에 도달할 수 있도록 배터리양과 교통 정보, 예측 정보를 활용해 충전 장소를 계산하는 ‘지능형 EV루트 플래너’ 기능도 장착했다. 무선 업데이트(OTA) 이용이 가능하다.",
    },
  ];
  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <div className="col-start-1 col-end-13 w-full">
          <p className="text-[2em] font-bold">팔로우 중인 뉴스</p>
          <p className="text-[#767676] text-[0.8em]">
            저장한 키워드, 언론사를 기반으로 뉴스를 추천해드립니다.
          </p>
        </div>
        {testItem.map((item, idx) => (
          <div
            key={idx}
            className="col-start-1 col-end-13 w-full flex flex-row items-center"
            style={{
              flexDirection: idx % 2 ? "row-reverse" : "row",
            }}
          >
            <div>
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
            <img
              alt=""
              src={item.img}
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

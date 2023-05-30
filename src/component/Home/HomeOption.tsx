/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from "react";
import { useUserInfo } from "../../State/UserInfo";
import GridLayout from "../Layout/GridLayout";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { sendPostEmailTimeRequest } from "./../API/homeAPI";

const HomeOption: React.FunctionComponent = () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const [useEmailService, setUseEmailService] = useState(
    userInfo.email_time.length > 0 ? true : false
  );
  const [selectedTime, setSelectedTime] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    userInfo.email_time.forEach(
      (time) => (selectedTime[(Number(time.slice(0, 2)) - 6) / 3] = true)
    );
    setSelectedTime([...selectedTime]);
  }, []);

  const handleSendEmailTime = useCallback(
    debounce(
      () =>
        sendPostEmailTimeRequest().catch((err) =>
          alert("서버 저장에 실패했습니다.")
        ),
      1000
    ),
    []
  );

  useEffect(() => {
    userInfo.setEmailTime(
      ["0630", "0930", "1230", "1530", "1830"].filter(
        (_, idx) => selectedTime[idx]
      )
    );

    handleSendEmailTime();
  }, [selectedTime]);

  useEffect(() => {
    if (!useEmailService) {
      setSelectedTime([false, false, false, false, false]);
    }
  }, [useEmailService]);
  return (
    <main className="relative ml-[60px] top-[4em]">
      <GridLayout>
        <div className="col-span-9">
          <p className="text-[#767676] text-[0.8em]">
            이메일 알림을 받을 시간을 설정할 수 있습니다.
          </p>
          <div className="w-full flex flex-col items-center mt-4">
            <p className="font-bold mb-4">
              이메일 서비스 시간 선택 (다중 선택 가능)
            </p>
            <div className="flex items-center w-full justify-around">
              <button
                className={`border font-bold px-4 py-2 rounded-[15px] ${
                  !useEmailService ? "text-black" : "text-[#767676]"
                }`}
                onClick={() => setUseEmailService(!useEmailService)}
              >
                사용 안함
              </button>
              {selectedTime.map((selected, idx) => (
                <button
                  key={idx}
                  className={`border font-bold px-4 py-2 rounded-[15px] duration-200 ${
                    selected ? " text-black" : "text-[#767676]"
                  }`}
                  onClick={() => {
                    setSelectedTime(
                      selectedTime.map((item, timeidx) =>
                        idx === timeidx ? !item : item
                      )
                    );
                    setUseEmailService(true);
                  }}
                >{`${
                  idx * 3 + 6 > 9 ? idx * 3 + 6 : "0" + (idx * 3 + 6)
                }:30`}</button>
              ))}
            </div>
          </div>
        </div>
        <button
          className="col-start-10 col-end-13"
          onClick={() => {
            userInfo.setInterests([]);
            userInfo.setToken("");
            userInfo.setUserId("");
            userInfo.setIsLoggined(false);
            navigate("/");
            sessionStorage.clear();
          }}
        >
          로그아웃
        </button>
      </GridLayout>
    </main>
  );
};

export default HomeOption;

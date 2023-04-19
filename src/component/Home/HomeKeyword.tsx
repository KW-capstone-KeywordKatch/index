/* eslint-disable no-useless-escape */
import axios from "axios";
import { useUserInfo } from "../../State/UserInfo";
import GridLayout from "../Layout/GridLayout";
import { useState } from "react";
import { remove } from "lodash";
import PROXY from "../../State/proxy";

const HomeKeyword: React.FunctionComponent = () => {
  const [keyWord, setKeyWord] = useState<string>("");
  const userInfo = useUserInfo();

  const patchKeyword = (keyWordList: string[]) => {
    if (userInfo.interests.includes(keyWord)) {
      alert("이미 추가된 키워드입니다.");
      setKeyWord("");
      return;
    }
    if (
      keyWord.search(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g) >= 0
    ) {
      alert("특수문자는 입력할 수 없습니다.");
      setKeyWord("");
      return;
    }
    if (keyWord.search(/\s/) >= 0) {
      alert("공백은 입력할 수 없습니다.");
      setKeyWord("");
      return;
    }
    axios
      .patch(
        `${PROXY}/user/interest`,
        {
          user_id: userInfo.userId,
          interest: keyWordList,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.code === 1000) {
          userInfo.setInterests(keyWordList);
          setKeyWord("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          value={keyWord}
          placeholder="키워드를 입력하세요."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (keyWord.length === 0) {
                alert("키워드를 입력해주세요.");
                return;
              }
              patchKeyword([...userInfo.interests, keyWord]);
            }
          }}
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
          className="my-[2em] px-4 py-2 outline-0 border rounded-[10px] col-start-1 col-end-7 w-full"
        ></input>
        <div className="border col-start-1 col-end-13 lg:col-end-7 bg-white ">
          <div className="bg-black w-full p-4 text-white ">선택한 키워드</div>
          <div className="p-4">
            {userInfo.interests.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between my-2"
                >
                  {item}
                  <div className="flex flex-row items-center ">
                    <button
                      onClick={() => {
                        if (keyWord.length === 0) {
                          alert("키워드를 입력해주세요.");
                          return;
                        }
                        patchKeyword(
                          userInfo.interests.map((interest, index) => {
                            if (index === idx) {
                              return keyWord;
                            }
                            return interest;
                          })
                        );
                      }}
                      className="border mr-2 border-[#767676] px-1 py-0.5 rounded-[5px] text-[0.8em]"
                    >
                      수정
                    </button>
                    <button
                      onClick={() =>
                        patchKeyword([
                          ...remove(userInfo.interests, (n) => n !== item),
                        ])
                      }
                      className="border border-[#767676] px-1 py-0.5 rounded-[5px] text-[0.8em]"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </GridLayout>
    </main>
  );
};

export default HomeKeyword;

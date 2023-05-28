import axios from "axios";
import getProxy from "../../State/proxy";

const URL = `${getProxy()}/`;

export const SignInRequest = async (email: string, password: string) => {
  return axios.post(URL + "auth/signin", {
    email: email,
    password: password,
  });
};

export const SignUpRequest = async (
  email: string,
  nickname: string,
  password: string,
  seletedTime: boolean[],
  callback: () => void
) => {
  return axios.get(URL + "user/duplication/" + nickname).then((res) => {
    if (res.data.code === 1000) {
      alert("이미 존재하는 닉네임입니다.");
    } else if (res.data.code === 1001) {
      axios
        .post(
          URL + "user/signup",
          {
            email: email,
            nickname: nickname,
            password: password,
            desired_time: ["0630", "0930", "1230", "1530", "1830"].filter(
              (_, i) => seletedTime[i]
            ),
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.code === 1000) {
            alert("회원가입이 완료되었습니다!");
            callback();
          } else if (res.data.code === 2001) {
            alert("이미 가입된 이메일 입니다.");
          } else {
            console.log(res);
            alert("문제가 발생했습니다.");
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  });
};

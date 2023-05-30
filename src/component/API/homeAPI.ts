import axios from "axios";
import getProxy from "../../State/proxy";
import { useUserInfo } from "../../State/UserInfo";

const URL = `${getProxy()}/`;

const baseAxios = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    "KK-TOKEN": useUserInfo.getState().token,
  },
});

export const sendGetHotKeywordRequest = async () => {
  return baseAxios.get("keywords/trend");
};

export const sendGetMyNewsListRequest = async () => {
  return axios.get(
    `${getProxy("/publish")}/articles/${useUserInfo.getState().user_id}`
  );
};

export const sendGetSearchResultRequest = async (keyword: string) => {
  return axios.get(`${getProxy("/prototype")}/prototype/${keyword}`);
};

export const sendPostEmailTimeRequest = async () => {
  return baseAxios.post("/user/emailTimeOption", {
    desired_time: useUserInfo.getState().email_time,
    user_id: useUserInfo.getState().user_id,
  });
};

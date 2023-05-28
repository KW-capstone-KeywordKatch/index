import { StateCreator, create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

interface UserInfoState {
  isLoggined: boolean;
  user_id: string;
  interests: string[];
  email_time: string[];
  token: string;
}

interface UserInfoAction {
  setIsLoggined: (isLoggined: boolean) => void;
  setUserId: (userId: string) => void;
  setInterests: (interests: string[]) => void;
  setToken: (token: string) => void;
  setAlarmTime: (alarmTime: string[]) => void;
  setUserInfo: (userInfo: UserInfoState) => void;
  clearUserInfo: () => void;
  setEmailTime: (email_time: string[]) => void;
}

interface UserInfoStore extends UserInfoState, UserInfoAction {}

export type UserInfoStatePersist = (
  config: StateCreator<UserInfoStore>,
  options: PersistOptions<UserInfoState>
) => StateCreator<UserInfoStore>;

export const useUserInfo = create<UserInfoStore>(
  (persist as UserInfoStatePersist)(
    (set) => ({
      isLoggined: false,
      user_id: "",
      interests: [],
      token: "",
      email_time: [],
      setToken: (token) => set((state) => ({ ...state, token: token })),
      setIsLoggined: (isLoggined) =>
        set((state) => ({ ...state, isLoggined: isLoggined })),
      setUserId: (userId) => set((state) => ({ ...state, user_id: userId })),
      setInterests: (interests) =>
        set((state) => ({ ...state, interests: interests })),
      setAlarmTime: (email_time) =>
        set((state) => ({ ...state, email_time: email_time })),
      setUserInfo: (userInfo) => set((state) => ({ ...state, ...userInfo })),
      clearUserInfo: () =>
        set(() => ({
          isLoggined: false,
          user_id: "",
          interests: [],
          token: "",
          email_time: [],
        })),
      setEmailTime: (email_time) => set((state) => ({ ...state, email_time })),
    }),
    { name: "userInfoStore" }
  )
);

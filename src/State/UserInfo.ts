import { StateCreator, create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

interface UserInfoState {
  isLoggined: boolean;
  userId: string;
  interests: string[];
  token: string;
}

interface UserInfoAction {
  setIsLoggined: (isLoggined: boolean) => void;
  setUserId: (userId: string) => void;
  setInterests: (interests: string[]) => void;
  setToken: (token: string) => void;
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
      userId: "",
      interests: [],
      token: "",
      setToken: (token) => set((state) => ({ ...state, token: token })),
      setIsLoggined: (isLoggined) =>
        set((state) => ({ ...state, isLoggined: isLoggined })),
      setUserId: (userId) => set((state) => ({ ...state, userId: userId })),
      setInterests: (interests) =>
        set((state) => ({ ...state, interests: interests })),
    }),
    { name: "userInfoStore" }
  )
);

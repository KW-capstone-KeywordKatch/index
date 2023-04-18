import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import { useUserInfo } from "./State/UserInfo";

const App: React.FunctionComponent = () => {
  const IndexPage = lazy(() => import("./page/IndexPage"));
  const userInfo = useUserInfo();
  return (
    <div className="text-[18px] font-pretendard">
      <Suspense fallback={<>로딩중...</>}>
        <Routes>
          <Route
            path="/*"
            element={userInfo.isLoggined ? <HomePage /> : <IndexPage />}
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

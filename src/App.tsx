import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useUserInfo } from "./State/UserInfo";
import ProtectRoute from "./component/ProtectRoute/ProtectRoute";
import IndexPage from "./page/IndexPage";

const App: React.FunctionComponent = () => {
  const SignInPage = lazy(() => import("./page/SignInPage"));
  const SignUpPage = lazy(() => import("./page/SignUpPage"));
  const HomePage = lazy(() => import("./page/HomePage"));

  const userInfo = useUserInfo();
  return (
    <div className="text-[18px] font-pretendard">
      <Suspense fallback={<>로딩중...</>}>
        <Routes>
          <Route
            path="/*"
            element={userInfo.isLoggined ? <HomePage /> : <IndexPage />}
          />
          <Route element={<ProtectRoute />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          <Route path="*" element={<IndexPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

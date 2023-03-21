import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";

const App: React.FunctionComponent = () => {
  const IndexPage = lazy(() => import("./page/IndexPage"));
  return (
    <div className="text-[18px] font-pretendard">
      <Suspense fallback={<>로딩중...</>}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home/*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

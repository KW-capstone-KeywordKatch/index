import SignIn from "./../component/Signin/Signin";
import GlobalNavigationBar from "./../component/GlobalNavigationBar/GlobalNavigationBar";

const SignInPage: React.FunctionComponent = () => {
  return (
    <>
      <GlobalNavigationBar />
      <SignIn />
    </>
  );
};

export default SignInPage;

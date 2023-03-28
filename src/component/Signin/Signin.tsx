import useVH from "react-viewport-height";
import SignInFooter from "../Footer/SignInFooter";
import GridLayout from "../Layout/GridLayout";
import LoginItems from "./LoginItems";

const SignIn: React.FunctionComponent = () => {
  const vh = useVH();
  return (
    <main className="relative top-[64px]" style={{ height: 100 * vh - 64 }}>
      <GridLayout>
        <LoginItems />
        <SignInFooter />
      </GridLayout>
    </main>
  );
};

export default SignIn;

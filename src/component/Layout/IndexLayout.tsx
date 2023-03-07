import { ReactNode } from "react";
import useVH from "react-viewport-height";

interface IndexLayoutProps {
  children: ReactNode;
}

const IndexLayout: React.FunctionComponent<IndexLayoutProps> = ({
  children,
}) => {
  const vh = useVH();
  return (
    <div
      className="relative bg-white w-screen flex flex-col items-center justify-center"
      style={{
        height: 100 * vh,
      }}
    >
      {children}
    </div>
  );
};

export default IndexLayout;

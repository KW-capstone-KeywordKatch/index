interface ArrowSvgProps {
  onClick?: () => void;
  className?: string;
  rotate?: number;
}

const ArrowSvg: React.FunctionComponent<ArrowSvgProps> = ({
  onClick,
  className,
  rotate,
}) => {
  return (
    <svg
      className={className}
      style={{
        rotate: `${rotate}deg`,
      }}
      onClick={onClick}
      width="25"
      height="42"
      viewBox="0 0 25 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7738 0.812506C24.7748 1.86119 24.7362 3.5228 23.6875 4.52381L6.42673 21L23.6875 37.4762C24.7362 38.4772 24.7748 40.1388 23.7738 41.1875C22.7728 42.2362 21.1112 42.2748 20.0625 41.2738L0.812501 22.8988C0.293589 22.4035 0 21.7174 0 21C0 20.2826 0.293589 19.5965 0.812501 19.1012L20.0625 0.726196C21.1112 -0.274819 22.7728 -0.236177 23.7738 0.812506Z"
        fill="#F8F8F8"
      />
    </svg>
  );
};

export default ArrowSvg;

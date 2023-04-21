interface LogoSvgProps {
  className?: string;
  onClick?: () => void;
}

const LogoSvg: React.FunctionComponent<LogoSvgProps> = ({
  className = "",
  onClick,
}) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M0.625 60V0.340942H9.94218V60H0.625ZM12.5854 30.9375L19.6558 0.340942H28.8409L21.8365 30.9375L29.1052 60H19.9862L12.5854 30.9375Z"
        fill="black"
      />
      <path
        d="M60.625 -2.85506e-05L60.625 59.6591L51.3078 59.6591L51.3078 -2.96012e-05L60.625 -2.85506e-05ZM48.6647 29.0625L41.5942 59.6591L32.4091 59.6591L39.4136 29.0625L32.1448 -3.17619e-05L41.2638 -3.07337e-05L48.6647 29.0625Z"
        fill="black"
      />
    </svg>
  );
};

export default LogoSvg;

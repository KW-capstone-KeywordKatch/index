interface FollowSvgProps {
  className?: string;
  onClick?: () => void;
  fill: string;
}

const FollowSvg: React.FunctionComponent<FollowSvgProps> = ({
  className = "",
  onClick,
  fill = "#707070",
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M0 14C1.06087 14 2.07828 14.4214 2.82843 15.1716C3.57857 15.9217 4 16.9391 4 18H0V14ZM0 7C6.075 7 11 11.925 11 18H9C9 15.6131 8.05179 13.3239 6.36396 11.636C4.67613 9.94821 2.38695 9 0 9V7ZM0 0C9.941 0 18 8.059 18 18H16C16 9.163 8.837 2 0 2V0Z"
        fill={fill}
      />
    </svg>
  );
};

export default FollowSvg;

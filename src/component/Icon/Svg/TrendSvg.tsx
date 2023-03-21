interface TrendSvgProps {
  className?: string;
  onClick?: () => void;
  fill: string;
}

const TrendSvg: React.FunctionComponent<TrendSvgProps> = ({
  className = "",
  onClick,
  fill = "#707070",
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <g clipPath="url(#clip0_93_164)">
        <path
          d="M21 1V13C20.9998 14.5736 20.587 16.1197 19.8027 17.484C19.0185 18.8483 17.8902 19.9831 16.5305 20.7752C15.1708 21.5674 13.6272 21.9892 12.0536 21.9986C10.48 22.0079 8.93142 21.6045 7.56238 20.8286C6.19334 20.0527 5.05166 18.9314 4.25124 17.5766C3.45081 16.2217 3.01961 14.6807 3.00065 13.1072C2.98169 11.5336 3.37563 9.98265 4.14318 8.6089C4.91073 7.23516 6.02505 6.08667 7.375 5.278L14 1.453V4.223L21 1ZM12 8C10.6739 8 9.40215 8.52678 8.46447 9.46447C7.52678 10.4021 7 11.6739 7 13C7 14.3261 7.52678 15.5979 8.46447 16.5355C9.40215 17.4732 10.6739 18 12 18C13.3261 18 14.5979 17.4732 15.5355 16.5355C16.4732 15.5979 17 14.3261 17 13C17 11.6739 16.4732 10.4021 15.5355 9.46447C14.5979 8.52678 13.3261 8 12 8Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_93_164">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TrendSvg;

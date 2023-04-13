interface ClassifySvgProps {
  className?: string;
}

const ClassifySvg: React.FunctionComponent<ClassifySvgProps> = ({
  className,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2_9754)">
        <path
          d="M15 3C15.552 3 16 3.448 16 4V8C16 8.552 15.552 9 15 9H13V11H17C17.552 11 18 11.448 18 12V15H20C20.552 15 21 15.448 21 16V20C21 20.552 20.552 21 20 21H14C13.448 21 13 20.552 13 20V16C13 15.448 13.448 15 14 15H16V13H8V15H10C10.552 15 11 15.448 11 16V20C11 20.552 10.552 21 10 21H4C3.448 21 3 20.552 3 20V16C3 15.448 3.448 15 4 15H6V12C6 11.448 6.448 11 7 11H11V9H9C8.448 9 8 8.552 8 8V4C8 3.448 8.448 3 9 3H15ZM9 17H5V19H9V17ZM19 17H15V19H19V17ZM14 5H10V7H14V5Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_9754">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ClassifySvg;
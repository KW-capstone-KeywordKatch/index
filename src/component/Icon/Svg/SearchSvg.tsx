interface SearchSvgProps {
  className?: string;
  onClick?: () => void;
  fill: string;
}

const SearchSvg: React.FunctionComponent<SearchSvgProps> = ({
  className = "",
  onClick,
  fill = "#707070",
}) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M16.0924 14.617L20.3899 18.899L18.9701 20.314L14.6736 16.031C13.0749 17.3082 11.0864 18.0029 9.03745 18C4.05255 18 0.00683594 13.968 0.00683594 9C0.00683594 4.032 4.05255 0 9.03745 0C14.0223 0 18.0681 4.032 18.0681 9C18.071 11.042 17.3739 13.0237 16.0924 14.617ZM14.0795 13.875C15.353 12.5699 16.0641 10.8204 16.0613 9C16.0613 5.132 12.9176 2 9.03745 2C5.15629 2 2.01364 5.132 2.01364 9C2.01364 12.867 5.15629 16 9.03745 16C10.8641 16.0029 12.6195 15.2941 13.929 14.025L14.0795 13.875Z"
        fill={fill}
      />
    </svg>
  );
};

export default SearchSvg;

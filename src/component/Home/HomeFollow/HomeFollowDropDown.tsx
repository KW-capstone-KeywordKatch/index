import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import { useState } from "react";
import ArrowSvg from "../../Icon/Svg/ArrowSvg";

const menu: Variants = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const item: MotionProps = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
};

interface HomeFollowDropDownProps {
  selectedKeyword: string;
  keywordList: string[];
  onClick: (keyword: string) => void;
}

interface HomeFollowDropDownItemProps {
  keyword: string;
  onClick: (keyword: string) => void;
}
const HomeFollowDropDown: React.FunctionComponent<HomeFollowDropDownProps> = ({
  selectedKeyword,
  keywordList,
  onClick,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <motion.div
      className="absolute flex flex-col right-0"
      onHoverStart={() => setIsOpened(true)}
      onHoverEnd={() => setIsOpened(false)}
    >
      <motion.div className="bg-black text-white text-[0.8em] px-4 rounded-[15px] cursor-pointer flex items-center justify-between w-[12em] hover:bg-[#444444]">
        <p className="font-bold">{selectedKeyword}</p>
        <ArrowSvg rotate={isOpened ? 90 : 270} className="w-[0.5em] ml-4" />
      </motion.div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            variants={menu}
            initial="closed"
            animate={isOpened ? "open" : "closed"}
            exit="closed"
            className="bg-white text-[0.8em] px-4 rounded-[15px] cursor-pointer flex flex-col items-center justify-between p-4 mt-4 drop-shadow-2xl gap-2"
            onClick={() => setIsOpened(false)}
          >
            {keywordList.map((keyword, idx) => (
              <HomeFollowDropDownItem
                key={idx}
                keyword={keyword}
                onClick={onClick}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HomeFollowDropDownItem: React.FunctionComponent<
  HomeFollowDropDownItemProps
> = ({ keyword, onClick }) => {
  return (
    <motion.div
      {...item}
      onClick={() => onClick(keyword)}
      className="cursor-pointer w-full hover:bg-[#d0d0d0] duration-100 rounded-[15px] px-4 py-2"
    >
      {keyword}
    </motion.div>
  );
};

export default HomeFollowDropDown;

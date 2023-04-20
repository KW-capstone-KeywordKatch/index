import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IndexLine: React.FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["30vw", "-70vw"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-70vw", "30vw"]);
  return (
    <div ref={containerRef} className="my-[2em] text-[4em]">
      <motion.div
        style={{
          x: x,
        }}
        className="w-screen overflow-hidden whitespace-nowrap font-bold opacity-60"
      >
        KATCH ABOUT NEWS KATCH ABOUT NEWS KATCH ABOUT NEWS
      </motion.div>
      <motion.div
        style={{
          x: x2,
        }}
        className="w-screen overflow-hidden whitespace-nowrap font-bold opacity-30"
      >
        KATCH ABOUT NEWS KATCH ABOUT NEWS KATCH ABOUT NEWS
      </motion.div>
    </div>
  );
};

export default IndexLine;

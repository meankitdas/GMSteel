import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Paragraph from "./word";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  //   const { scrollYProgress } = useScroll({
  //     target: container,

  //   });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.25]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-350%"]);

  const paragraph = `The Jamshedpur Steel Works was established by 'Tata Iron and Steel Company' in 1907 at Sakchi, this was renamed Jamshedpur by 1918, in honour of Jamsetji Tata, the founder of the Tata dynasty.Preparations started in 1908, with the first machinery arriving in 1910 and first production in early 1912.

  Badampahar Iron Mine was the second iron mine developed by Tata; the first being Gorumahisani Iron Mine which was commenced in 1908 with the first ore being sent to the Jamshedpur Steel Works in 1911.
  `;

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative font-poppins font-light flex flex-col justify-center items-center "
    >
      <motion.h1 className="text-white text-5xl z-30 font-semibold" style={{y: headingY}}>History of Badampahar</motion.h1>
      <Paragraph paragraph={paragraph} textY={textY} />

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/color_town.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
          opacity: 0.9,
        }}
      />
    </div>
  );
}

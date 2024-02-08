
import React, { use, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { logo } from "../public";

export default function LandingPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div className="w-full h-screen overflow-hidden relative  ">
      <motion.div
        style={{ y: textY }}
        className=" absolute bottom-0 left-0 w-full z-30 ml-28 mb-32 "
      >
        <div className="font-extrabold text-white text-8xl font-benas flex  items-end  ">
          <Image src={logo} alt="img" width={300} />
          <span className="mb-1 ml-1">M IRON & STEEL LTD.</span>
        </div>
        <p className="font-light text-white text-4xl font-poppins  w-2/4">
          Discover the Strength of GM Iron & Steel: Unleashing the Power of Iron
          Ore.
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 "
        style={{
          // backgroundImage: `url(/mines_full.png)`,
          backgroundImage: `url(/mines_full_2.jpeg)`,

          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
    </div>
  );
}

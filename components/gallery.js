import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import {
  environment1,
  environment2,
  environment3,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  mines1,
  mines2,
  mines3,
  product1,
  product2,
  product3,
} from "../public";
import styles from "./gallery.module.scss";

const images = [
  image1,
  image2,
  image3,
  image6,
  image5,
  image4,
  product1,
  product2,
  product3,
];

export default function Gallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const { height } = dimension;
  //   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.25]);
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
 

  return (
    <div className={styles.main}>
      <div ref={gallery} className={styles.gallery}>
        <span className="mt-[-15vh] absolute h-[205vh] inset-0 ">
          <motion.span
            //   style={{ y: backgroundY }}
              // className="text-white inset-0 text-center absolute text-[150px] font-benas z-50"
            className="sticky top-[40%] left-1/2 before:absolute z-30 bg-red-800 "
          >
            <motion.h1
              style={{ opacity: opacity}}
              className="font-benas text-9xl text-center text-white z-40"
            >
              Our Products
            </motion.h1>
          </motion.span>
        </span>
        <Column
          images={[
            images[0],
            images[1],
            images[2],
            images[0],
            images[1],
            images[2],
          ]}
          y={y}
        />
        <Column
          images={[
            images[3],
            images[4],
            images[5],
            images[3],
            images[4],
            images[5],
          ]}
          y={y2}
        />
        <Column
          images={[
            images[6],
            images[7],
            images[8],
            images[6],
            images[7],
            images[8],
          ]}
          y={y3}
        />
      </div>
    </div>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <>
            <div key={i} className={styles.imageContainer}>
              <Image src={src} alt="image" />
            </div>
          </>
        );
      })}
    </motion.div>
  );
};

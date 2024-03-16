import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs: string[] = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
];

const ONE_SECOND: number = 1000;
const AUTO_DELAY: number = ONE_SECOND * 10;
const DRAG_BUFFER: number = 50;

const SPRING_OPTIONS = {
  type: "spring" as const,
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel: React.FC = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x: number = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x: number = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const handleDotClick = (idx: number) => {
    setImgIndex(idx);
  };

  return (
    <div className="carousel-container">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="carousel-content"
      >
        {imgs.map((imgSrc: string, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
            className="carousel-item"
          />
        ))}
      </motion.div>
      <div className="dot-container">
        {imgs.map((_: string, idx: number) => (
          <div
            key={idx}
            className={`dot ${idx === imgIndex ? "active" : ""}`}
            onClick={() => handleDotClick(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SwipeCarousel;

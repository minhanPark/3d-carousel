import React, { useRef, useState } from "react";
import styles from "./carousel.module.css";

function CarouselComponenet() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const cellCount = 15; //15
  const theta = 360 / cellCount; // 24
  const cellSize = 210;
  // 2 * Math.PI는 360도 이다.
  // 여기에 각 항에 cellCount을 나눈다
  // (2 * Math.PI) / cellCount = 360 / cellCount
  // 여기에 우리는 직각을 통해 탄젠트를 사용할 것이므로 나오는 값을 반으로 나눠야 한다.
  // 그래서 다시 2를 또 나눈다
  // ((2 * Math.PI) % cellCount) % 2  = (360 / cellCount) % 2
  // 위의 식을 줄인게 Math.tan( Math.PI / cellCount)
  const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
  const boxex = Array.from({ length: 15 }, (v, i) => i + 1);
  const rotateCarousel = (selectedIndex: number) => {
    const angle = theta * selectedIndex * -1;
    if (carousel?.current) {
      carousel.current.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
    }
  };
  // const rotate = () => {
  //   const angle = theta * selectedIndex * -1;
  //   if (carousel?.current) {
  //     carousel.current.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
  //   }
  // };
  const handlePrev = () => {
    setSelectedIndex((prevIndex) => {
      rotateCarousel(prevIndex - 1);
      return prevIndex - 1;
    });
  };
  // const handlePrev = () => {
  //   setSelectedIndex((prevIndex) => prevIndex - 1);
  //   rotate();
  // };
  const handleNext = () => {
    setSelectedIndex((prevIndex) => {
      rotateCarousel(prevIndex + 1);
      return prevIndex + 1;
    });
  };
  // const handleNext = () => {
  //   setSelectedIndex((prevIndex) => prevIndex + 1);
  //   rotate();
  // };
  return (
    <>
      <div className={styles.scene}>
        <div className={styles.carousel} ref={carousel}>
          {boxex.map((value) => (
            <div className={styles.carousel__cell} key={value}>
              {value}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={handlePrev}>이전</button>
        <button onClick={handleNext}>다음</button>
      </div>
    </>
  );
}

export default CarouselComponenet;

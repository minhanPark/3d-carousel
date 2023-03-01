import React, { useState } from "react";
import style from "./CardFlip.module.css";

const CardFlip = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prevValue) => !prevValue);
  };
  return (
    <div className={style.container}>
      <div className={style.scene}>
        <div
          onClick={handleClick}
          className={`${style.card} ${clicked ? style["is-flipped"] : ""}`}
        >
          <img
            className={`${style["card-face"]} ${style.back}`}
            src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
            alt="back"
          />
          <img
            className={style["card-face"]}
            src="https://images.pokemontcg.io/swsh35/1_hires.png"
            alt="front"
          />
        </div>
      </div>
    </div>
  );
};

export default CardFlip;

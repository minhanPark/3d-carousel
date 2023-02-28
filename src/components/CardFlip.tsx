import React from "react";
import style from "./CardFlip.module.css";

const CardFlip = () => {
  return (
    <div className={style.scene}>
      <div className={style.card}>
        <img
          className={style.card - face}
          src="https://images.pokemontcg.io/swsh35/1_hires.png"
          alt="front"
        />
        <img
          className={style.card - face}
          src="https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
          alt="back"
        />
      </div>
    </div>
  );
};

export default CardFlip;

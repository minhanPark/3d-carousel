import React, { useState } from "react";
import style from "./Cube.module.css";

const Cube = () => {
  const squareSides = ["front", "right", "back", "left", "top", "bottom"];
  const [selected, setSelected] = useState("front");
  const handleOption = (e: any) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <div className={style.scene}>
        <div className={`${style.cube} ${style[`show-${selected}`]}`}>
          {squareSides.map((value) => (
            <div
              key={value}
              className={`${style["cube__face"]} ${style[value]}`}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className={style.buttons}>
        {squareSides.map((value) => (
          <>
            <input
              key={`input-${value}`}
              type="radio"
              name="selected"
              value={value}
              id={`input-${value}`}
              checked={selected === value}
              onChange={handleOption}
            />
            <label htmlFor={`input-${value}`}>{value}</label>
          </>
        ))}
      </div>
    </>
  );
};

export default Cube;

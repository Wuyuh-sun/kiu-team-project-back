import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";

export default function WishBtn() {
    const [colorState, setColorState] = useState(false);  
  const [color, setColor] = useState("rgba(0,0,0,0.1)");

  useEffect(()=>{
    colorState === false ? setColor("rgba(0,0,0,0.1)") : setColor("red");
  },[colorState])

  return (
    <>
      <div className={style.wishBtn} onClick={()=>{
        colorState === false ? setColorState(true) : setColorState(false);
      }}>
        <FontAwesomeIcon
          className={style.wishBtnItem1}
          icon="fa-solid fa-heart"
          color={color}
          size="xl"
        />
        <FontAwesomeIcon
          className={style.wishBtnItem2}
          icon="fa-regular fa-heart"
          color="rgb(255,255,255)"
          size="xl"
        />
      </div>
    </>
  );
}

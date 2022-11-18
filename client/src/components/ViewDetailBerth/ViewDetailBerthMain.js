import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import LoginSlide from "../Login/LoginSlide";
import BackBtn from "./BackBtn";
import Facilities from "./Facilities";
import FooterComponent from "./FooterComponent";
import HostInfo from "./HostInfo";
import MapInfo from "./MapInfo";
import Pay from "./Pay";
import RulesInfo from "./RulesInfo";
import ReviewInfo from "./ReviewInfo";
import Report from "./Report";
import TitleInfo from "./TitleInfo";
import ViewDetailBerthSwiper from "./ViewDetailBerthSwiper";
import WishBtn from "./WishBtn";

export default function ViewDetailBerthMain(props) {
  // console.log(props.state);
  const ImgArr = props.state.titleImg;
  //   console.log(ImgArr);
  useEffect(() => {
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [payLeft, setPayLeft] = useState("100%");
  return (
    <>
      <div className={style.wrap}>
        <BackBtn />
        <WishBtn />
        <ViewDetailBerthSwiper imgArr={ImgArr} />
        <TitleInfo info={props.state} />
        <HostInfo info={props.state} />
        <MapInfo info={props.state} />
        <Facilities info={props.state} />
        <ReviewInfo info={props.state} />
        <RulesInfo info={props.state} />
        <Report info={props.state} />
        <FooterComponent info={props.state} setPayLeft={setPayLeft} />
      </div>

      <Pay info={props.state} left={payLeft} setPayLeft={setPayLeft} />
      <LoginSlide />
    </>
  );
}

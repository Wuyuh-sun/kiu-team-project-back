import style from "../../css/Main/MainNav.module.css";
import MainNavItem from "./MainNavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function MainNav() {
  const item1Icon = <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{"--fa-primary-color":"red"}}/>;
  const item2Icon = <FontAwesomeIcon icon="fa-solid fa-heart" />;
  const item3Icon = <FontAwesomeIcon icon="fa-solid fa-house" />;
  const item4Icon = <FontAwesomeIcon icon="fa-solid fa-bell" />;
  const item5Icon = <FontAwesomeIcon icon="fa-solid fa-user" />;
;
  const location = useLocation();

  const [locationIconFill, setLocationIconFill] = useState(1);

  useEffect(() => {
    location.pathname === "/main/search" ? setLocationIconFill(1) : 
    location.pathname === "/main/wishlist" ? setLocationIconFill(2) :
    location.pathname === "/main/home" ? setLocationIconFill(3) :
    location.pathname === "/main/notice" ? setLocationIconFill(4) :
    location.pathname === "/main/profile" ? setLocationIconFill(5) :
    false;
  }, [location]);
  // console.log(locationIconFill);
  return (
    <>
      <div className={style.wrap}>
        <div className={style.itemBox}>
          <MainNavItem name="둘러보기" icon={item1Icon} value="search"  fill={locationIconFill === 1 ?  "#A53939" : "#000"}/>
          <MainNavItem name="위시리스트" icon={item2Icon} value="wishlist"  fill={locationIconFill === 2 ?  "#A53939" : "#000"}/>
          <MainNavItem name="숙소" icon={item3Icon} value="home"  fill={locationIconFill === 3 ?  "#A53939" : "#000"}/>
          <MainNavItem name="알림" icon={item4Icon} value="notice"  fill={locationIconFill === 4 ?  "#A53939" : "#000"}/>
          <MainNavItem name="프로필" icon={item5Icon} value="profile"  fill={locationIconFill === 5 ?  "#A53939" : "#000"}/>
        </div>
      </div>
    </>
  );
}

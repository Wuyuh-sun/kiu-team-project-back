import NonLogin from "./MainWishList/NonLogin";
import style from "../../../css/Main/MainContent/MainWishList.module.css";
import { useEffect, useState } from "react";
import LoginOk from "./MainWishList/LoginOk";
import LoginSlide from "../../Login/LoginSlide";
import axios from "axios";

export default function MainWishList() {
  const [auth, setAuth] = useState();
  // console.log(auth);

  useEffect(() => {
    document.body.style.overflow = "auto";
    axios
      .get("/api/users/checkauthentication")
      .then((res) => {
        setAuth(true);
      })
      .catch((err) => {
        // console.dir(err);
        setAuth(false);
      });
  }, []);
  return (
    <>
      <div className={style.wrap}>
        {auth === false ? (
          <>
            <NonLogin />
            <LoginSlide />
          </>
        ) : auth === true ?(
          <>
            <LoginOk />
          </>
        ): false}
      </div>
    </>
  );
}

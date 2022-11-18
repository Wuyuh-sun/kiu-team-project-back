import axios from "axios";
import { useEffect, useState } from "react";
import LoginSlide from "../../Login/LoginSlide";
import NoLogin from "./MainNotice/NoLogin";
import Notice from "./MainNotice/Notice";

export default function MainNotice() {
  const [auth, setAuth] = useState();

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
      {auth === false ? (
        <>
          <NoLogin />
          <LoginSlide />
        </>
      ) : auth === true ? (
        <Notice />
      ) : (
        false
      )}
    </>
  );
}

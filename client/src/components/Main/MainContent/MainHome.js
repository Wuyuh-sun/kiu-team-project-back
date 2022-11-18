import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./MainHome/Home";
import NotLogin from "./MainHome/NotLogin";
import Reservation from "./MainHome/Reservation";

export default function MainHome() {
  const [auth, setAuth] = useState();
  const [reserve, setReserve] = useState(true);

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
      <div>
        {auth === false ? (
          <NotLogin />
        ) : auth === true ? (
          reserve === false ? (
            <Home />
          ) : (
            <Reservation />
          )
        ) : (
          false
        )}
      </div>
    </>
  );
}

import ProfileLogin from "./MainProfile/ProfileLogin.js";
import Profile from "./MainProfile/Profile.js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainProfile() {
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
  return <>{auth === false ? <ProfileLogin /> : auth===true ?<Profile authState={setAuth}/> : false}</>;
}

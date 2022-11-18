import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import {
  authUIStateFunc,
  authUITopFunc,
  authUIDisplayFunc,
  authUIOpacityFunc,
} from "../../store/modules/authUIStateSlice";

export default function LoginSlide() {
  const authUIState = useSelector((state) => {
    return state.authUI;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    authUIState.state === false
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  }, [authUIState]);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: `${authUIState.top}`,
          left: 0,
          backgroundColor: `rgba(255,255,255,${authUIState.opacity})`,
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter:"blur(5px)",
          zIndex: 99999,
          display: `${authUIState.display}`,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.5s ease-in-out, top 0.5s ease-in-out",
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            zIndex: 99999,
            backgroundColor: "white",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            padding: "10px",
            marginBottom: "20px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
          }}
          onClick={() => {
            dispatch(authUIStateFunc(false));
            dispatch(authUITopFunc("100%"));
            dispatch(authUIOpacityFunc(0));
            setTimeout(() => {
              dispatch(authUIDisplayFunc("none"));
            }, 500);
          }}
        />
        <Login />
      </div>
    </>
  );
}

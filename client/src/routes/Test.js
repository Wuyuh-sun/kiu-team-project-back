import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
// import {authStateFunc} from "../store/modules/authSlice";

export default function Test() {
  const authSlice = useSelector((state) => {
    // return state.스토어에서가져오고자 하는 state이름 선택.value;
    return state.auth.value;
  });

  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies(["name"]);

  useEffect(() => {
    axios
      .get("/api/users/checkauthentication")
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        console.dir(err);
        setContent("please login");
      });
  }, []);

  let params = {
    email: String,
    password: String,
  };

  const [content, setContent] = useState();
  useEffect(() => {
    !content ? console.log(false) : console.log(true);
  }, [content]);
  return (
    <>
      {cookies.access_token && <h1>Hello {cookies.access_token}!</h1>}
      <input type="text" name="name" defaultValue="john3" />
      <input type="password" name="password" defaultValue="123456" />
      <button
        onClick={(e) => {
          e.preventDefault();
          params.email = e.currentTarget.parentNode.childNodes[0].value;
          params.password = e.currentTarget.parentNode.childNodes[1].value;
          // console.dir(params);
          axios({
            method: "post",
            url: "/api/auth/login",
            data: JSON.stringify(params),
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              withCredentials: true,
              crossDomain: true,
              credentials: true,
            },
          })
            .then((res) => {
              console.dir(res);
            })
            .catch((err) => {
              console.dir(err);
            });
        }}
      >
        login
      </button>
      <div>{content}</div>
    </>
  );
}

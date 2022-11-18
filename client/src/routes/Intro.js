import { useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";

export default function Intro() {
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.dir(location.state);
    setTimeout(() => {
      navigate(`/main`)
    }, 2500);
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#f8f8f8",
        }}
      >
        <Fade
          style={{
            position: "absolute",
            top: "calc(40% - 107px)",
            left: "calc(50% - 80px)",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "214px",
              backgroundImage: "url(../img/icon/LAMAH3.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Fade>
        <Fade
          delay={1e3}
          cascade
          damping={0.1}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            fontSize: "50px",
            fontWeight: "bold",
            transform: "translateX(-50%)",
          }}
        >
          LAMAH
        </Fade>
      </div>
    </>
  );
}

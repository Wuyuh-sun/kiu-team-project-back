import { height } from "@mui/system";
import "./ni.css";

export default function NoticeItem(props) {
  return (
    <>
      <div
        style={{
          width: "380px",
          height: "65px",
          backgroundColor: "white",
          marginBottom: "12px",
          borderRadius: "20px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding:"0 10px 0 20px",
          boxSizing:"border-box"
        }}
      >
        <div
          style={{
            width: "320px",
            display:"flex",
            flexDirection:"column"
          }}
        >
          <button style={{
              width: "15px",
              height: "20px",
              position: "absolute",
              left: "0",
              top: "0",
              border: "none",
              borderRadius: "20px",
          }}>
            x
          </button>

          <p
            style={{
              position: "relative",
              fontSize: "11px",
            }}
          >
            {props.notice}
          </p>
          <p
            style={{
              position: "relative",
              top: "0",
              fontSize: "11px",
            }}
          >
            대구광역시 - 중구 - 성민이의 러브 하우스 - 2022-10-28
          </p>
        </div>

        <div
          style={{
            position: "relative",
            // left: "89%",
            left: "0",
            width: "60px",
            height: "50px",
          }}
        >
          <div className="sungminImg"></div>
        </div>
      </div>
    </>
  );
}

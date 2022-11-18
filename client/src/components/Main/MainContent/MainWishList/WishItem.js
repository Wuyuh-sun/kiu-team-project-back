import "./ono.css"
export default function WishItem(props) {
  return (
    <>
      <div
        style={{
          width: "160px",
          height: "180px",
          backgroundColor: "white",
          marginBottom: "30px",
          borderRadius: "15px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          alignContent: "space-between"
        }}
      >
        <div style={{
            position: "relative",
            left: "50%",
            top: "62px",
            transform: "translate(-50%, -50%)",
            width: "130px",
            height: "110px",
        }}>
        <div className="sungminImg">
            <button className="btn1" type="button"></button>
        </div>
        </div>
        <p style={{
              position: "relative",
              fontSize: "13px",
              left: "15px",
              top: "19px",
              fontSize: "12px"
        }}>대구광역시 - 중구 </p>
        <p style={{
            position: "relative",
            fontWeight: "bold",
            fontSize: "13px",
            left: "14px",
            top: "25px"
        }}>{props.title}</p>
      </div>
    </>
  );
}
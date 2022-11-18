export default function ReservationItem(props) {
  return (
    <>
      <p
        style={{
          position: "relative",
          bottom: "100px",
          left: "14px",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        {props.date}
      </p>
      <div
        style={{
          width: "360px",
          height: "150px",
          backgroundColor: "white",
          marginBottom: "60px",
          borderRadius: "20px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 10px 0 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "320px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              position: "relative",
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            {props.notice}
          </p>
          <p
            style={{
              position: "relative",
              fontSize: "13px",
              marginBottom: "5px",
            }}
          >
            {props.content}
          </p>
          <p
            style={{
              position: "relative",
              fontSize: "13px",
              marginBottom: "5px",
            }}
          >
            {props.days}
          </p>
          <p
            style={{
              position: "relative",
              fontSize: "13px",
            }}
          >
            {props.people}
          </p>
        </div>

        <div
          style={{
            position: "relative",
            left: "0",
            width: "60px",
            height: "50px",
          }}
        >
          <div
            className="sungminImg"
            style={{
              position: "relative",
              top: "50%",
              left: "0%",
              transform: "translate(-50%, -50%)",
              width: "90px",
              height: "110px",
              background: "url(../../../../img/sungminHome.png)",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

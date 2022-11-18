export default function RecentItem(props) {
  return (
    <>
      <div
        style={{
          width: "165px",
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

        <div style={{
            width: "100%",
            height: "100%",
            background: "url(../../../../img/sungminHome.png)",
            backgroundSize: "cover",
            borderRadius: "15px"
        }}>
            <button style={{
                 background: "url(../../../../img/icon/heart.png)",
                 backgroundSize: "20px 20px",
                 backgroundPosition: "10px 10px",
                 width: "30px",
                 height: "30px",
                 position: "relative",
                 left: "92px",
                 top: "70px",
                 border: "none",
                 backgroundRepeat: "no-repeat"
            }}></button>          
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

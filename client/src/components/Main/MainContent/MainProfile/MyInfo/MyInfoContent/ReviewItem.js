import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewItem(props) {
  return (
    <>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          position: "relative",
          top: "10px",
        }}
      >
        {props.num}
      </p>

      <div
        style={{
          width: "350px",
          height: "480px",
          backgroundColor: "white",
          marginBottom: "50px",
          borderRadius: "15px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 5%)",
        }}
      >
        <p
          style={{
            position: "relative",
            fontWeight: "bold",
            top: "38px",
            left: "10px",
            fontSize: "18px",
          }}
        >
          {props.name}
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-right"
            style={{
              position: "relative",
              left: "10px",
            }}
          />
        </p>

        <p
          style={{
            position: "relative",
            top: "45px",
            left: "10px",
            fontSize: "15px",
            color: "gray",
          }}
        >
          {props.date}

          <button
            style={{
              border: "none",
              boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
              backgroundColor: "white",
              borderRadius: "10px",
              width: "50px",
              height: "20px",
              fontSize: "11px",
              position: "relative",
              left: "50px",
              color: "gray",
            }}
          >
            수정
          </button>

          <button
            style={{
              border: "none",
              boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
              backgroundColor: "white",
              borderRadius: "10px",
              width: "50px",
              height: "20px",
              fontSize: "11px",
              position: "relative",
              left: "60px",
              color: "gray",
            }}
          >
            삭제
          </button>
        </p>

        <div
          style={{
            position: "relative",
            top: "38%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "330px",
            height: "250px",
            background: "url(../../../../img/sungminHome.png)",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            top: "60px",
            display : "flex",
            justifyContent : "space-around",
            height: "40px"
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "10px",
              background: "url(../../../../img/icon/LAMAH3.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px 27px",
              backgroundPosition: "10px 6px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              boxShadow: "inset -1px -3px 10px rgba(0,0,0,0.2)",
            }}
          >            
          </div>
          <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              position: "relative",
              top: "2px",              
              left: "9px",
              width: "100px",
            }}
          >
            {props.username}
          </p>
          <p
            style={{
              fontSize: "7px",
              position: "relative",
              left: "9px",
              color: "gray",
              top: "2px",
            }}
          >
            {props.days}
          </p>
          </div>
          <div
            style={{
              width: "70px",
              position: "relative",
              left: "35px",
              top: "10px"
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              style={{
                color: "orange",
                width: "10px",
                height: "10px",
                padding: "1px"
              }}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              style={{
                color: "orange",
                width: "10px",
                height: "10px",
                padding: "1px"
              }}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              style={{
                color: "orange",
                width: "10px",
                height: "10px",
                padding: "1px"
              }}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              style={{
                color: "orange",
                width: "10px",
                height: "10px",
                padding: "1px"
              }}
            />
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              style={{
                color: "orange",
                width: "10px",
                height: "10px",
                padding: "1px"
              }}
            />
          </div>
        </div>
        <p
          style={{
            fontSize: "12px",
            width: "325px",
            position: "relative",
            top: "70px",
            left: "10px",
          }}
        >
          {props.comment}
        </p>
      </div>
    </>
  );
}

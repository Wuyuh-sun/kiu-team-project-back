import style from "../../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoContent/ReservationItem.module.css";

export default function ReservationItem(props) {
  return (
    <>
      <div className={style.block}>
        <h1 className={style.date}>{props.date}</h1>
        <button className={style.button}>취소</button>
      </div>
      <div className={style.box}>
        <div className={style.sbox}>
          <h2 className={style.stitle}>{props.notice}</h2>
          <p className={style.infop}>{props.content}</p>
          <p className={style.infop}>{props.days}</p>
          <p className={style.infop2}>{props.people}</p>
        </div>

        <div className={style.imgbox}>
          <div
            className={style.img}
            style={{
              background: "url(../../../../img/sungminHome.png)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

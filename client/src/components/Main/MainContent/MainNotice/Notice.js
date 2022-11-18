import style from "../../../../css/Main/MainContent/MainNotice/Notice.module.css";
import NoticeItem from "./NoticeItem";

export default function Notice(props) {
    return (
      <>
        <div className={style.wrap}>
          <div className={style.div}>
            <h2 className={style.title}>알림</h2>
        <button className={style.delete}>모두 지우기</button>
        <div className={style.list}>
            <NoticeItem notice="여행 기간까지 2일 남았습니다."/>
            <NoticeItem notice="여행 기간까지 5일 남았습니다."/>
            <NoticeItem notice="숙소 예약이 완료되었습니다."/>
            <NoticeItem notice="'성민'님이 귀하의 숙소를 예약하였습니다."/>
          </div>
          </div>
        </div>
      </>
    );
  }
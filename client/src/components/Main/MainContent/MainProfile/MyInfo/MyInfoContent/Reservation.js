import style from "../../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoContent/Reservation.module.css"
import ReservationItem from "./ReservationItem";

export default function Reservation(){
    return (<>
        {/* <div className={style.wrap}> */}
        {/* <div className={style.div}> */}
          <div className={style.list}>
            <ReservationItem
              date="2022-10-27"
              notice="성민이의 러브 하우스"
              content="호스트 명 - 성민"
              days="2022-10-27 ~ 2022-11-03"
              people="성인 - 2명 아동 - 2명"
            />
            <ReservationItem
              date="2022-09-27"
              notice="창표의 비닐 하우스"
              content="호스트 명 - 창표"
              days="2022-09-27 ~ 2022-10-03"
              people="성인 - 2명 아동 - 2명"
            />
            <ReservationItem
              date="2022-08-27"
              notice="성민이의 큐티 하우스"
              content="호스트 명 - 성민"
              days="2022-08-27 ~ 2022-09-03"
              people="성인 - 2명 아동 - 2명"
            />
            <ReservationItem
              date="2022-07-27"
              notice="민정이의 러브 하우스"
              content="호스트 명 - 민정"
              days="2022-07-27 ~ 2022-08-03"
              people="성인 - 2명 아동 - 2명"
            />
          </div>
        {/* </div> */}
      {/* </div> */}
    
    </>);
}
import style from "../../../../css/Main/MainContent/MainHome/Reservation.module.css";
import ReservationItem from "./ReservationItem";
import useFetch from "../../../../hooks/useFetch";



  

export default function ReserVation(props) {

  const {data, loading, error} = useFetch("/hotels?featured=true&limit=4"); 

  return (
    <div className="fp">
      {loading ? "Loading" : <>
      {data. map((item) => (
      <div className={style.wrap}>
        <div className={style.div}>
          <div className={style.list}>
            <ReservationItem
              date="2022-10-27"
              notice={item.name}
              content="kkkk"
              days="2022-10-27 ~ 2022-11-03"
              people="성인 - 2명 아동 - 2명"
            />
          </div>
        </div>
      </div>
      ))}
    </>}
    </div>
  );
}


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";

export default function TitleInfo(props) {
  // console.log(props.info);
  const grade = props.info.grade.toFixed(1);
  return (
    <>
      <div className={style.titleWrap}>
        <h1>{props.info.addr_detail}</h1>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-star" color="#ffb300" />
          {grade} 후기 ??개
        </div>
        <div>{props.info.addr_lot}</div>
        <div></div>
      </div>
    </>
  );
}

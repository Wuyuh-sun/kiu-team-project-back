import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";

export default function Report(props) {
//   console.dir(props.info);
  return (
    <>
      <div className={style.ReportWrap}>
        <FontAwesomeIcon icon="fa-solid fa-flag"/>
        <div>숙소 신고하기</div>
      </div>
    </>
  );
}

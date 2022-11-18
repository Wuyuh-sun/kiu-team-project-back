import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function BackBtn(){
    let navigate = useNavigate();
    return (
      <>
        <div className={style.backBtn} onClick={()=>{
            navigate(-1);
        }}>
          <FontAwesomeIcon icon="fa-solid fa-angle-left" size="xl"/>
        </div>
      </>
    );
}
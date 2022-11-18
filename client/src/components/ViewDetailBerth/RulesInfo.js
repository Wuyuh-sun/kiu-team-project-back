import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";

export default function RulesInfo(props){
    console.dir(props.info)
    return(
        <>
        <div className={style.RulesInfoWrap}>
            <div className={style.rules_title}>
                숙소 이용규칙
            </div>
            <div className={style.rules_content}>
                <div>{props.info.rules[0]}</div>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </div>
            <div></div>
        </div>
        </>
    )
}
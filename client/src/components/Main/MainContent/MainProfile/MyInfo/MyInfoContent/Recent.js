import RecentItem from "./RecentItem";
import style from "../../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoContent/Recent.module.css";

export default function Recent(){
    return (<>
         <div>
          <div className={style.list}>
            <RecentItem title="성민이의 러브 하우스1"/>
            <RecentItem title="창표의 러브 하우스2"/>
            <RecentItem title="성민이의 러브 하우스3"/>
            <RecentItem title="성민이의 러브 하우스4"/>
            <RecentItem title="성민이의 러브 하우스5"/>
            <RecentItem title="성민이의 러브 하우스6"/>
          </div>
        </div>
    </>);
}
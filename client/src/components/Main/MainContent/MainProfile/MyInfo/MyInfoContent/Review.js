import style from "../../../../../../css/Main/MainContent/MainProfile/MyInfo/MyInfoContent/Review.module.css";

import ReviewItem from "./ReviewItem";

export default function Review(props){
    return (<>
    <div className={style.wrap}>
          <div className={style.div}>
        <div className={style.list}>     
        <ReviewItem num="12개" name="성민이의 러브 하우스" date="10월 28일 ~ 11월 02일" username="라마 관리자" comment="좋습니다. 테라스에서 밥 먹을 수도 있고 야외 캠핑도 가능하도록 되어있어서 재밌게 놀다 갔어요." days="1개월 전"/>
        <ReviewItem name="창표의 러브 하우스" date="10월 27일 ~ 11월 03일" username="라마 관리자" comment="좋았습니다. 테라스에서 가족끼리 고기도 구워먹고 얘기도 하고 재밌게 놀다 갔어요." days="2개월 전"/>
        </div>
          </div>
        </div>
    </>);
}
import style from "../../../../css/Main/MainContent/MainWishList/LoginOk.module.css";
import WishItem from "./WishItem";

export default function LoginOk(props) {
  return (
    <>
        <div>
          <h2 className={style.wish}>위시 리스트 </h2>
          <div className={style.list}>
            <WishItem title="성민이의 러브 하우스1"/>
            <WishItem title="성민이의 러브 하우스2"/>
            <WishItem title="성민이의 러브 하우스3"/>
            <WishItem title="성민이의 러브 하우스4"/>
            <WishItem title="성민이의 러브 하우스5"/>
            <WishItem title="성민이의 러브 하우스6"/>          
        </div>
      </div>
    </>
  );
}

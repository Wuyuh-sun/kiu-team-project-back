import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";

export default function HostInfo(props) {
  // console.dir(props.info);
  return (
    <>
      <div className={style.hostWrap}>
        <div className={style.hostWrap_content}>
          <div className={style.hostWrap_textBox}>
            <div className={style.hostWrap_category}>{props.info.category}</div>
            <div className={style.hostWrap_host}>
              호스트 : {props.info.hostName}
            </div>
            <div className={style.hostWrap_detailInfo}>
              최대 인원 {props.info.max_people}명 침실 {props.info.bedroom}개
              침대 {props.info.bed}개 욕실 {props.info.bathroom}개
            </div>
          </div>
          <div className={style.hostWrap_imgBox}>
            <div
              className={style.profileCircle}
              style={{
                backgroundImage: `url(./img/${props.info.hostImg})`,
              }}
            ></div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

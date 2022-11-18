const { kakao } = window;

export default function KakaoMapScript() {
  sessionStorage.setItem("searchlat", 35.8674536201437);
  sessionStorage.setItem("searchlng", 128.5850556036308);



  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(sessionStorage.searchlat, sessionStorage.searchlng),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  // console.log(container);
}

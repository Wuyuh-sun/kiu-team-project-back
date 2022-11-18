import { Route, Routes } from "react-router-dom";
import MainSearch from "./MainContent/MainSearch";
import MainWishList from "./MainContent/MainWishList";
import MainHome from "./MainContent/MainHome";
import MainNotice from "./MainContent/MainNotice";
import MainProfile from "./MainContent/MainProfile";
import style from "../../css/Main/MainContent.module.css";

export default function MainContent(){

    return(
        <>
        <div className={style.wrap}>
            <Routes>
                <Route path="/search" element={<MainSearch/>}/>
                <Route path="/wishlist" element={<MainWishList/>}/>
                <Route path="/home" element={<MainHome/>}/>
                <Route path="/notice" element={<MainNotice/>}/>
                <Route path="/profile" element={<MainProfile/>}/>
            </Routes>
        </div>
        </>
    )
}
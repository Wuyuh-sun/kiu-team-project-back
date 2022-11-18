import { Route, Routes, useLocation } from "react-router-dom";
import ViewDetailBerthMain from "../components/ViewDetailBerth/ViewDetailBerthMain";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import Pay from "../components/ViewDetailBerth/Pay";

export default function ViewDetailBerth() {
  const location = useLocation();

  // console.dir(location.state);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ViewDetailBerthMain state={location.state} />}
        />
        {/* <Route path="/paysystem" element={<Pay state={location.state} />} /> */}
      </Routes>
    </>
  );
}

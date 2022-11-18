import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../../../css/Main/MainContent/MainSearch/SearchBerthList.module.css";
import berthList from "../../../../dummydata/BerthList.json";
import BerthItem from "./BerthItem";
import Draggable from "react-draggable";
import { SearchMapBtnStateFunc } from "../../../../store/modules/SearchMapBtnSlice";

export default function SearchBearthList() {
  // console.dir(berthList.data);

  const SearchMapBtnState = useSelector((state) => {
    // return state.스토어에서가져오고자 하는 state이름 선택.value;
    return state.SearchMapBtn.value;
  });

  const wrapRef = useRef();
  const itemWrapRef = useRef();

  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: 0,
      y: 100,
    },
  });

  const handleDrag = (e, ui) => {
    const { deltaPosition } = state;
    const { x, y } = deltaPosition;
    const { deltaX, deltaY } = ui;
    setState({
      ...state,
      deltaPosition: {
        x: x + deltaX,
        y: y + deltaY,
      },
    });
  };
  const onStart = () => {
    const { activeDrags } = state;
    setState({ ...state, activeDrags: activeDrags + 1 });
  };
  const onStop = () => {
    const { activeDrags } = state;
    setState({ ...state, activeDrags: activeDrags - 1 });
  };
  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    setState({ ...state, controlledPosition: { x, y } });
  };
  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };
  const adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = state;
    const { x, y } = controlledPosition;
    setState({ ...state, controlledPosition: { x: x - 10, y } });
  };
  const adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = state;
    const { x, y } = controlledPosition;
    setState({ ...state, controlledPosition: { x, y: y - 10 } });
  };

  const onDrop = (e) => {
    setState({ activeDrags: state.activeDrags - 1 });
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  const onDropAreaMouseEnter = (e) => {
    if (state.activeDrags) {
      e.target.classList.add("hovered");
    }
  };
  const onDropAreaMouseLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  const dragHandlers = { onStart, onStop };
  const { deltaPosition, controlledPosition } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    if (SearchMapBtnState === false) {
      controlledPosition.y = 0;
      wrapRef.current.style.top = "-100px";
      wrapRef.current.style.paddingTop = "220px";
      wrapRef.current.style.position = "absolute";
      wrapRef.current.style.transition = "0.5s ease-in-out";
      wrapRef.current.childNodes[0].style.top = "-200px";
      wrapRef.current.childNodes[0].childNodes[0].style.opacity = "0";
      document.body.style.overflow = "auto";
      setTimeout(() => {
        wrapRef.current.style.transition = "none";
      }, 500);
    } else if (SearchMapBtnState === 2) {
      controlledPosition.y = 0;
      wrapRef.current.style.top = "calc(100% - 20px)";
      wrapRef.current.style.paddingTop = "50px";
      wrapRef.current.style.position = "absolute";
      wrapRef.current.style.transition = "0.5s ease-in-out";
      wrapRef.current.childNodes[0].style.top = "-50px";
      wrapRef.current.childNodes[0].childNodes[0].style.transition =
        "0.5s ease-in-out";
      wrapRef.current.childNodes[0].childNodes[0].style.opacity = "1";
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        wrapRef.current.style.transition = "none";
      }, 500);
    } else {
      controlledPosition.y = 0;
      wrapRef.current.style.top = "300px";
      wrapRef.current.style.paddingTop = "50px";
      wrapRef.current.style.position = "absolute";
      wrapRef.current.style.transition = "0.5s ease-in-out";
      wrapRef.current.childNodes[0].style.top = "-50px";
      wrapRef.current.childNodes[0].childNodes[0].style.transition =
        "0.5s ease-in-out";
      wrapRef.current.childNodes[0].childNodes[0].style.opacity = "1";
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        wrapRef.current.style.transition = "none";
      }, 500);
    }
  }, [SearchMapBtnState]);

  useEffect(() => {
    // console.log(controlledPosition.y);
    controlledPosition.y < -20
      ? dispatch(SearchMapBtnStateFunc(false))
      : controlledPosition.y > 20
      ? dispatch(SearchMapBtnStateFunc(2))
      : false;
    controlledPosition.y < -350 && SearchMapBtnState === 2
      ? dispatch(SearchMapBtnStateFunc(false))
      : controlledPosition.y < -20 && SearchMapBtnState === 2
      ? dispatch(SearchMapBtnStateFunc(true))
      : false;
  }, [state]);
  return (
    <>
      <Draggable
        position={deltaPosition}
        {...dragHandlers}
        onStop={onControlledDrag}
        handle=".cursor"
        axis="y"
      >
        <div
          ref={wrapRef}
          className={style.wrap}
          style={{
            top: "-100px",
            paddingTop: "220px",
          }}
        >
          <div className="cursor">
            <div className={style.slideBtn}></div>
          </div>

          <div ref={itemWrapRef} className={style.itemWrap}>
            {berthList.data.map((item, i) => {
              return <BerthItem key={i} positionY={controlledPosition.y} idx={i}/>;
            })}
          </div>
          {/* <div className={style.emptyItemWrap}>
            <BerthItem/>
          </div> */}
        </div>
      </Draggable>
    </>
  );
}

import { createSlice } from "@reduxjs/toolkit";

// default state 값 지정
const initialState = {
  value: false,
};

export const SearchMapBtnSlice = createSlice({
  // 고유이름
  name: "SearchMapBtn",
  // 위에서 정한 기본값
  initialState,
  // 상태 변경 함수
  // state <= 현재 상태(기본은 위에서 정한 initialState), action <= useDispatch를 통해 변경된 액션
  reducers: {
    SearchMapBtnStateFunc:(state, action)=>{
      state.value = action.payload;
    }, 
   
  },
});

// 액션 내보내기
export const { SearchMapBtnStateFunc } = SearchMapBtnSlice.actions;

// redux state 내보내기
export default SearchMapBtnSlice.reducer;
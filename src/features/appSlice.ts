import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface AppSliceState {
  roomId: string 
}

const initialState:  AppSliceState= {
  roomId: '',
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      return state;
    },
  }
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state: RootState) => state.app.roomId;

export default appSlice.reducer;

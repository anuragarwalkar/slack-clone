import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  roomId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      return state;
    },
  },
  extraReducers: (builder) => {},
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state: any) => state.app.roomId;

export default appSlice.reducer;

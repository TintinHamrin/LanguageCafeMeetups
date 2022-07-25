import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attending: [],
};

export const meetupSlice = createSlice({
  name: "attending",
  initialState,
  reducers: {
    getAttendees(state: any, payload: any) {
      state.attending.push(payload);
    },
  },
});

export const { getAttendees } = meetupSlice.actions;
export default meetupSlice.reducer;

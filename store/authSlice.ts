import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: true,
};

export const authSlice = createSlice({
  name: "attending",
  initialState,
  reducers: {
    isLoggedIn(state: any, payload: any) {
      state.authenticated = payload;
    },
  },
});

export const { isLoggedIn } = authSlice.actions;
export default authSlice.reducer;

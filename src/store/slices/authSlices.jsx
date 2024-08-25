import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticate: false,
    authDetails: null,
  },

  reducers: {
    loginAction: (state, action) => {
      state.authenticate = true;
      state.authDetails = action.payload;
    },
  },
});

export const { loginAction } = authSlice.actions;

export default authSlice.reducer;

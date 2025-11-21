import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateProfile: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.password = "";
    },
  },
});

export const { updateUsername, updatePassword, updateProfile, login, logout } =
  profileSlice.actions;

export default profileSlice.reducer;

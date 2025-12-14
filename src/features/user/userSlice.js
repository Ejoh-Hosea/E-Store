import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  night: "night",
  cupcake: "cupcake",
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.cupcake;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "hosea" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("logged out successfully");
    },
    toggleTheme: (state) => {
      const { night, cupcake } = themes;
      state.theme = state.theme === cupcake ? night : cupcake;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;

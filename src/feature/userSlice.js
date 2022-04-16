import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    childrenData: (state, action) => {
      //state is the initial state while action is an object that carries a payload, action.payload would be use to update the state when this reducer is called/dispatched
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { childrenData, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

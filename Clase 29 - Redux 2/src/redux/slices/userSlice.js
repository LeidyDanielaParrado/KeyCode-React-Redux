import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  name: "",
  lastName: "",
  email: "",
  age: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.age = action.payload.age;
    },
    deleteUser: (state) => {
      state.name = initialUser.name;
      state.lastName = initialUser.lastName;
      state.email = initialUser.email;
      state.age = initialUser.age;
    },
    modifyUser: (state, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.age = action.payload.age;
    },
    modifyName: (state, action) => {
      state.name = action.payload;
    },
    modifyLastName: (state, action) => {
      state.lastName = action.payload;
    },
    modifyEmail: (state, action) => {
      state.email = action.payload;
    },
    modifyAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { addUser, deleteUser, modifyUser, modifyName, modifyLastName, modifyEmail, modifyAge } =
  userSlice.actions;
export default userSlice.reducer;

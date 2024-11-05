import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    photo: null,
};

const useSlice = createSlice({
    name: "user", // Identificador del estado
    initialState, // Estado inicial
    reducers: {
        // Funciones que modifican el estado
        addUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        changeName: (state, action) => {
            state.name = action.payload.name;
        },
    },
});

export const { addUser, changeName } = useSlice.actions;
export default useSlice.reducer;
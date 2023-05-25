import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface User {
    logged_in: boolean,
    id: number,
    name: string,
    username: string,
}

const initialState: User = {
    logged_in: true,
    id: 1,
    name: "Michael",
    username: "mykalesalad",
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state, action:PayloadAction<User>) => {
            state = action.payload;
        },
        logOut: (state) => {
            state.logged_in = false
            state.id = -1
            state.name = ""
            state.username = ""
        },
    },
})

export default UserSlice.reducer
export const { logIn, logOut } = UserSlice.actions
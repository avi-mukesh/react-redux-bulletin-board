import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: "0", name: "Avi Mukesh" },
    { id: "1", name: "Bastard man" },
    { id: "2", name: "Mayank Mukesh" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer

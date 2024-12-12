import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";
const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            // console.log(action.payload);
            state.push(action.payload);
        },
        removeUser(state, action) {
            // console.log("hi" + action.payload);
            // state.pop(action.payload);
            state.splice(action.payload, 1);
        },
        // clearAllUsers(state, action) {
            // console.log("deleted all users");
            // return state = [];
        //     return [];

        // },
    },
    extraReducers(builder) {
        builder.addCase(clearAllUsers, (state) => {
            return state = [];
        });
    }


});
// console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser} = userSlice.actions
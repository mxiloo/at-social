import {createSlice} from "@reduxjs/toolkit";

export interface User {
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

interface UsersState {
    users: User[];
    archivedUsers: User[],
}

const initialState: UsersState = {
    users: [],
    archivedUsers: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
            console.log(state.users);
        },
        setArchivedUsers(state, action) {
            const archivedUser = state.users.find(user => user.id === action.payload);
            if (archivedUser) {
                state.archivedUsers.push(archivedUser);
                state.users = state.users.filter(user => user.id !== action.payload);
            }
        }
    },
});

export const { setUsers, setArchivedUsers } = usersSlice.actions;

export default usersSlice.reducer;
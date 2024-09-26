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
        },
        setUnArchivedUsers(state, action) {
            const unArchivedUser = state.archivedUsers.find(user => user.id === action.payload);
            if (unArchivedUser) {
                state.users.push(unArchivedUser);
                state.archivedUsers = state.archivedUsers.filter(user => user.id !== action.payload);
            }
        },
        setDeleteUser(state, action) {
            const deletedUser = state.users.find(user => user.id === action.payload);
            const deletedUserArchive = state.archivedUsers.find(user => user.id === action.payload);
            if (deletedUser || deletedUserArchive) {
                state.users = state.users.filter(user => user.id !== action.payload);
                state.archivedUsers = state.archivedUsers.filter(user => user.id !== action.payload);
            }
        }
    },
});

export const { setUsers, setArchivedUsers, setDeleteUser, setUnArchivedUsers } = usersSlice.actions;

export default usersSlice.reducer;
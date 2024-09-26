import {createSlice} from "@reduxjs/toolkit";

export interface User {
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
    isAchived: boolean;
}

interface UsersState {
    users: User[];
    city: Record<number, string>,
}

const initialState: UsersState = {
    users: [],
    city: {},
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
            // console.log(state.users);
        },
        setArchiveToggle(state, action) {
            const currentUser = state.users.find(user => user.id === action.payload.id);
            if (currentUser) {
                currentUser.isAchived = action.payload.toggle
            }
        },
        setCityData(state, action) {
            state.city[action.payload?.id] = action.payload.city
        },
        setDeleteUser(state, action) {
            const deletedUser = state.users.find(user => user.id === action.payload);
            if (deletedUser) {
                state.users = state.users.filter(user => user.id !== action.payload);
            }
        },
        setChangeData(state, action) {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
    },
});

export const { setUsers, setDeleteUser, setChangeData, setCityData, setArchiveToggle } = usersSlice.actions;

export default usersSlice.reducer;
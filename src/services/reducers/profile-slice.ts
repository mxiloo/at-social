import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TProfile = {
    name: string,
    username: string,
    email: string,
    city: string,
    phone: string
}

const initialState: TProfile | undefined = {
    profile: {}
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<TProfile | undefined>) => {
            state.profile = action.payload
            // console.log(state.profile)
        }
    }
})

export const {
    setProfile
} = profileSlice.actions

export default profileSlice.reducer;
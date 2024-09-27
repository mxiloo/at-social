import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TModalSlice = {
    isOpen: boolean,
}

const initialState: TModalSlice = {
    isOpen: false,
}


const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        }
    }
})

export const { setIsModalOpen } = modalSlice.actions

export default modalSlice.reducer;
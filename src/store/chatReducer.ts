import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        conversationInitiated: false,
        chat: []
    },
    reducers: {
        setChatState: (state, action) => {
            state.conversationInitiated = action.payload
        },
        setChat: (state, action) => {
            state.chat = action.payload
        }
    }
})

export const { setChatState, setChat } = chatSlice.actions
export default chatSlice.reducer;
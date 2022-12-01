import { configureStore } from "@reduxjs/toolkit"
import { chatReducer } from "./chats/reducer"
import { messagesReducer } from "./messages/reducer"
import { profileReducer } from "./profile/reducer"

export const store = configureStore({
    reducer:{
        chats: chatReducer,
        profile: profileReducer,
        messages: messagesReducer,
    },
})
import { configureStore } from "@reduxjs/toolkit"
import { applyMiddleware, createStore, compose, combineReducers } from "@reduxjs/toolkit"
import { chatReducer } from "./chats/reducer"
import { messagesReducer } from "./messages/reducer"
import { profileReducer } from "./profile/reducer"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // расширение для браузера 

// export const store = createStore(toggleProfilePrivacy, composeEnhancers(applyMiddleware()))

export const store = createStore(combineReducers({
    chats: chatReducer,
    profile: profileReducer,
    messages: messagesReducer,
}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
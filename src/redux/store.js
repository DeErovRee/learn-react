import { configureStore } from "@reduxjs/toolkit"
import { applyMiddleware, createStore, compose, combineReducers } from "@reduxjs/toolkit"
import { toggleProfilePrivacy } from "./reducer"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // расширение для браузера 

// export const store = createStore(toggleProfilePrivacy, composeEnhancers(applyMiddleware()))

export const store = configureStore({
    reducer: {
        toggle: toggleProfilePrivacy
    }
})
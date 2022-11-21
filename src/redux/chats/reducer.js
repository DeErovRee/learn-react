import { nanoid } from '@reduxjs/toolkit'
import { ADD_CHAT } from './actions'

const initialState = {
    chatList: [],
}

export const chatReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList, {
                        id: nanoid(),
                        name: action.name
                    },
                ],
            }
        default: 
            return state;
    }
}
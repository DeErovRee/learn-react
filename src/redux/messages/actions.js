export const ADD_MESSAGE = 'MESSAGES::ADD_MESAGE'

export const addMessage = ( message) => ({
    type: ADD_MESSAGE,
    message,
})
export const ADD_MESSAGE = 'MESSAGES::ADD_MESAGE'

export const addMessage = (chatId, message, timeStamp) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
    timeStamp,
})
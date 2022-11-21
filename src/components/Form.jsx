import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import SendIcon from '@material-ui/icons/Send'

import { getCurrentDate } from './function/currentDate'
import { addMessage } from '../redux/messages/actions'

export const Form = ({chatId}) => {

    const dispatch = useDispatch()

    const onAddMessage = (chatId, message, e) => {
        e.preventDefault()
        if (message.length > 0) {
            const timeStamp = getCurrentDate()
            dispatch(addMessage(chatId, message, timeStamp))

        }
        
    }

    const ref = useRef (null)

    useEffect( () => {
        ref.current.focus()
    }, [])

    return (
        <form onSubmit={(e) => onAddMessage(chatId, e.target[0].value, e)} className='formSubmit'>
            <div className="inputField">
                <input ref={ref} className="inputText" placeholder="Текст" />
            </div>
            <button type="submit" className='sendMessageBtn'>
                <SendIcon />
            </button>
        </form>
    )
}
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import SendIcon from '@material-ui/icons/Send'

import { getCurrentDate } from './function/currentDate'
import { addMessage } from '../redux/messages/actions'


// const dispatch = useDispatch()


export const Form = ({chatList, setChatList, data, setData}) => {
    const {text, author} = data

    const dispatch = useDispatch()

    const onAddMessage = (e) => {
        console.log(e)
        // dispatch(addMessage(e))
    }

    const submitForm = (e) => {
        e.preventDefault()
        if(e.target[1].value.length > 0 && e.target[0].value.length > 3) {
            let text = e.target[1].value
            let author = e.target[0].value
            let timeStamp = getCurrentDate()
            console.log(chatList)
            

            // setChatList(prevstate => [...prevstate, {text, author, timeStamp}])
        }
        setData(
            {
                text: '',
                author: '',
            }
        )
    }

    const ref = useRef (null)

    useEffect( () => {
        ref.current.focus()
    }, [])

    return (
        <form onSubmit={(e) => onAddMessage(e)} className='formSubmit'>
            <div className="inputField">
                <input ref={ref} className="inputName" placeholder="Имя" value={author} onChange={(e) => setData(prevstate => [{...prevstate, author: e.target.value}])} />
                <input className="inputText" placeholder="Текст" value={text} onChange={(e) => setData(prevstate => [{...prevstate, text: e.target.value}])} />
            </div>
            <button type="submit" className='sendMessageBtn'>
                <SendIcon />
            </button>
        </form>
    )
}
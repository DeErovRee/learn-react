import React, { useEffect, useRef } from 'react'

import { getCurrentDate } from './currentDate'

export const Form = ({data, setData, setMessage}) => {
    const {text, author} = data

    const submitForm = (e) => {
        e.preventDefault()
        if(e.target[1].value.length > 0 && e.target[0].value.length > 3) {
            let text = e.target[1].value
            let author = e.target[0].value
            let timeStamp = getCurrentDate()
            setMessage(prevstate => [...prevstate, {text, author, timeStamp}])
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
        <form onSubmit={submitForm} className='formSubmit'>
            <div className="inputField">
                <input ref={ref} className="inputName" placeholder="Имя" value={author} onChange={(e) => setData(prevstate => [{...prevstate, author: e.target.value}])} />
                <input className="inputText" placeholder="Текст" value={text} onChange={(e) => setData(prevstate => [{...prevstate, text: e.target.value}])} />
            </div>
            <button type="submit" className='sendMessageBtn'>
                &#8682;
            </button>
        </form>
    )
}
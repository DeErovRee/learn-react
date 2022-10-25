import React from 'react'

import { getCurrentDate } from './currentDate'

export const Form = ({data, setData, setMessage}) => {
    const {text, author} = data

    const submitForm = (e) => {
        e.preventDefault()
        if(e.target[1].value.length > 0) {
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
    return (
        <form onSubmit={submitForm}>
            <div className="inputField">
                <input className="inputName" placeholder="Имя" value={author} onChange={(e) => setData(prevstate => [{...prevstate, author: e.target.value}])} />
                <input className="inputText" placeholder="Текст" value={text} onChange={(e) => setData(prevstate => [{...prevstate, text: e.target.value}])} />
            </div>
            <button type="submit">
                &#8682;
            </button>
        </form>
    )
}
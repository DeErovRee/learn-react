import React, { useState, useRef } from 'react'
import { getFIO } from './getFIO'

export const SidebarItem = ({chatList, setChatList,}) => {

    //Удаление чата из списка чатов
    const delChat = (e) => {
        const user = e.target.attributes.user.value
        setChatList((prevstate) => 
            prevstate.filter(el => {
                return el.title !== user
            })
        )
    }

    return (
        <ul>
            {chatList.map((el, ind) => <li key={ind}  className='SidebarItem'>
                <div className='chatImg'>{el.FIO}</div>
                <div>{el.title}</div>
                <button className='btnDelChat' type='button' user={el.title} onClick={(e) => {delChat(e)}}>X</button>
                </li>)}
            <SidebarItemAdd 
                setChatList={setChatList}
            />
        </ul>
    )
}

export const SidebarItemAdd = ({setChatList}) => {
    
    const [data, setData] = useState({
        text: ''
    })

    const submitForm = (e) => {
        e.preventDefault()
        let user = e.target[1].value
        if (user) {
            const FIO = getFIO(user)
            setChatList((prevstate => [...prevstate, {title: user, FIO}]))
        }
        setData({
            text: ''
        })
    }
    
    return (
        <li>
            <form className='SidebarItemAdd sidebarItem' onSubmit={submitForm}>
                <button type='submit' className='chatImg chatListAddBtn'><span>&#10133;</span></button>
                <input 
                    type='text' 
                    placeholder='Введите пользователя' 
                    className='chatListAddInput' 
                    value={data.text}
                    onChange={(e) => setData((prevstate) => [{...prevstate, text: e.target.value}])}/>
            </form>
        </li>
    )
}

export const Sidebar = ({chatList, setChatList}) => {
    return (
        <div className="sidebar">
            <SidebarItem 
                chatList={chatList}
                setChatList={setChatList} />
        </div>
    )
}


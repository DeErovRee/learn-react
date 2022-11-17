import React, { useState } from 'react'
import { 
    BrowserRouter as Router,
    Routes, 
    Route, 
    Link 
  } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add'
import { getFIO } from './function/getFIO'

export const SidebarItem = ({chatList, setChatList, currentChat, setCurrentChat}) => {

    //Удаление чата из списка чатов
    const delChat = (e) => {
        const user = e.target.attributes.user.value
        setChatList((prevstate) => 
            prevstate.filter(el => {
                return el.title !== user
            })
        )
    }

    const fn = (e) => {
        console.log(currentChat)

        if (e.target.className === 'btnDelChat') {
            return
        } else if (e.target.className === 'SidebarItem') {
            setCurrentChat((prevstate => [title: e.target.attributes['data-title'].value]))
            // console.log(e.target.attributes['data-title'].value)
        } else {
            setCurrentChat((prevstate => [{title: e.target.parentElement.attributes['data-title'].value}]))
            // console.log(e.target.parentElement.attributes['data-title'].value)
        }
    }

    return (
        <>
            <ul>
                {chatList.map((el, ind) => 
                <Link 
                    to={`/chats/chat${ind+1}`} 
                    key={ind}  
                    className='SidebarItem' 
                    data-id={el.id} 
                    data-title={el.title} 
                    data-fio={el.FIO}
                    onClick={(e) => {fn(e)}}
                >
                    <div className='chatImg'>{el.FIO}</div>
                    <div className='chatTitle'>{el.title}</div>
                    <button className='btnDelChat' 
                        type='button' 
                        user={el.title} 
                        onClick={(e) => {delChat(e)}}>X</button>
                </Link>)}
                <SidebarItemAdd 
                    setChatList={setChatList}
                    chatList={chatList}
                />
            </ul>
        </>
    )
}

export const SidebarItemAdd = ({setChatList, chatList}) => {
    
    const [data, setData] = useState({
        text: ''
    })

    const submitForm = (e) => {
        e.preventDefault()
        let user = e.target[1].value
        if (user.length > 3) {
            console.log(user, user.length)
            const FIO = getFIO(user)
            const id = chatList.length + 1
            setChatList((prevstate => [...prevstate, {id: id, title: user, FIO: FIO, img: '', messages: [{author: '', text: '',}]}]))
        }
        setData({
            text: ''
        })
    }
    
    return (
        
        <li>
            <form className='SidebarItemAdd sidebarItem formListAdd' onSubmit={submitForm}>
                <button type='submit' className='chatImg chatListAddBtn'>
                    <AddIcon />
                </button>
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

export const Sidebar = ({chatList, setChatList, currentChat, setCurrentChat}) => {
    return (
        <div className="sidebar">
            <SidebarItem 
                currentChat={currentChat}
                setCurrentChat={setCurrentChat}
                chatList={chatList}
                setChatList={setChatList} />
        </div>
    )
}


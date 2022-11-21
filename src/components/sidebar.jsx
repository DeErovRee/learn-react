import React from 'react'
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add'
import { getFIO } from './function/getFIO'
import { useDispatch, useSelector } from 'react-redux';

import { addChat } from '../redux/chats/actions'

export const SidebarItem = ({ setChatList }) => {

    const chats = useSelector(state => state.chats.chatList)

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
        <>
            <ul>
                {chats.map((el, ind) => 
                <Link 
                    to={`/chats/chat${ind}`} 
                    key={ind}  
                    className='SidebarItem' 
                    data-id={el.id} 
                    data-title={el.name} 
                    data-fio={el.FIO}
                >
                    <div className='chatImg'>{el.FIO}</div>
                    <div className='chatTitle'>{el.name}</div>
                    <button className='btnDelChat' 
                        type='button' 
                        user={el.name} 
                        onClick={(e) => {delChat(e)}}>X</button>
                </Link>)}
                <SidebarItemAdd
                    chats={chats}
                />
            </ul>
        </>
    )
}

export const SidebarItemAdd = () => {

    const dispatch = useDispatch()

    const onAddChat = (e) => {
        e.preventDefault()
        dispatch(addChat(e.target[1].value))
    }
    
    return (
        
        <li>
            <form className='SidebarItemAdd sidebarItem formListAdd' onSubmit={(e) => onAddChat(e)}>
                <button type='submit' className='chatImg chatListAddBtn'>
                    <AddIcon />
                </button>
                <input 
                    type='text' 
                    placeholder='Введите пользователя' 
                    className='chatListAddInput'/>
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


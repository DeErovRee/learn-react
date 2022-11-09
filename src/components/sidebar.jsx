import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { getFIO } from './function/getFIO'

export const SidebarItem = ({chatList, setChatList}) => {

    const [userInfo, setUserInfo] = useState({
        id: null,
        title: null,
        fio: null
    })

    //Удаление чата из списка чатов
    const delChat = (e) => {
        const user = e.target.attributes.user.value
        setChatList((prevstate) => 
            prevstate.filter(el => {
                return el.title !== user
            })
        )
    }

    
    const sendMessageClick = (e) => {
        console.log(e.target.tagName)
        if (e.target.tagName === 'BUTTON') {
            return
        } else if (e.target.tagName === 'LI') {
            let attrElem = e.target.attributes;
            const dataID = attrElem['data-id'].value;
            const dataTitle = attrElem['data-title'].value;
            const dataFIO = attrElem['data-fio'].value;
            const promise = new Promise ((resolve, reject) => {setUserInfo([resolve({dataID, dataTitle, dataFIO})])})
            promise.then((value) => console.log(value))
        } else {
            let attrElem = e.target.parentElement.attributes;
            const dataID = attrElem['data-id'].value;
            const dataTitle = attrElem['data-title'].value;
            const dataFIO = attrElem['data-fio'].value;
            const promise = new Promise ((resolve, reject) => {setUserInfo([resolve({id: dataID, title: dataTitle, fio: dataFIO})])})
            promise.then((value) => console.log(value))
        }
        
    }

    return (
        <>
            <ul>
                {chatList.map((el, ind) => 
                <li key={ind}  className='SidebarItem' onClick={(e) => sendMessageClick(e)} data-id={el.id} data-title={el.title} data-fio={el.FIO}>
                    <div className='chatImg'>{el.FIO}</div>
                    <div className='chatTitle'>{el.title}</div>
                    <button className='btnDelChat' type='button' user={el.title} onClick={(e) => {delChat(e)}}>X</button>
                </li>)}
                <SidebarItemAdd 
                    setChatList={setChatList}
                    chatList={chatList}
                />
            </ul>
            <div className='chatUser'>
            </div>
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
        if (user) {
            const FIO = getFIO(user)
            const id = chatList.length + 1
            setChatList((prevstate => [...prevstate, {id, title: user, FIO}]))
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

export const Sidebar = ({chatList, setChatList}) => {
    return (
        <div className="sidebar">
            <SidebarItem 
                chatList={chatList}
                setChatList={setChatList} />
        </div>
    )
}


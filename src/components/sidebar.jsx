import React from 'react'

export const SidebarItem = ({chatList, setChatList}) => {
    return (
        <ul>
            {chatList.map((el, ind) => <li key={ind}><div className='chatImg'>{el.FIO}</div>{el.title}</li>)}
        </ul>
    )
}

export const Sidebar = ({chatList, setChatList}) => {
    return (
        <div className="sidebar">
            <SidebarItem 
                chatList={chatList}
                setChatList={chatList}/>
        </div>
    )
}


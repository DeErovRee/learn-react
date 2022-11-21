import React, { useEffect, useRef } from 'react'
import { 
    BrowserRouter as Router,
    Routes, 
    Route, 
    Link,
} from 'react-router-dom';
import { useSelector } from 'react-redux'

import { MessageArray } from './messageArray';
import { Form } from './form'

export const MessageField = () => {

    const chats = useSelector(state => state.chats.chatList)
    const message = useSelector(state => state.messages.messageList)
    
    return(
            <div className='messageList'>
                <Routes className='chatUser'>
                    {
                        chats.map((el, ind) => {
                        return(<Route 
                            path={`/chat${ind}`}
                            element={
                                <>
                                    <h1>Чат c {el.name}</h1>
                                    <MessageArray 
                                        chatId={chats.indexOf(chats[ind])}/>
                                    <Form
                                        chatId={ind}></Form>
                                </>
                            }
                            key={ind}/>)
                        })
                    }
                </Routes>
            </div>
    )
}
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

// const chats = useSelector((state) => state.chats.chatList)
// const messages = useSelector((state) => state.messages.messageList)

export const MessageField = ({chatList}) => {
    return(
            <div className='messageList'>
                <Routes className='chatUser'>
                    {
                        chatList.map((el, ind) => {
                        return(<Route 
                            path={`/chat${ind+1}`}
                            element={
                                <>
                                    <h1>Чат c {el.title}</h1>
                                    <MessageArray 
                                        array={el.messages}/>
                                </>
                            }
                            key={ind}/>)
                        })
                    }
                </Routes>
            </div>
    )
}
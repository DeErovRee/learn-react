import React, { useEffect, useRef } from 'react'
import { 
    BrowserRouter as Router,
    Routes, 
    Route, 
    Link 
  } from 'react-router-dom';
import { MessageArray } from './messageArray';

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
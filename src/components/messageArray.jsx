import React from "react";
import { Message } from "./message";
import { useSelector } from 'react-redux'

export const MessageArray = ({chatId}) => {

    const message = useSelector(state => state.messages.messageList)

    console.log(message[chatId])

    return(
        <>
            {
                // message[chatId].map((el, ind) => {
                //     return(<Message 
                //         author={el.name}
                //         text={el.message}
                //         timeStamp={el.time}
                //         key={ind}/>)
                // })
            }
        </>
    )
}
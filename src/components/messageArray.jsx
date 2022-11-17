import React from "react";
import { Message } from "./message";
import { getCurrentDate } from "./function/currentDate";

export const MessageArray = ({array}) => {
    return(
        <>
            {
                array.map((el, ind) => {
                    return(<Message 
                        author={el.author}
                        text={el.text}
                        timeStamp={getCurrentDate()}
                        key={ind+1}/>)
                })
            }
        </>
    )
}
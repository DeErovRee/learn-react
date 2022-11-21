import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

export const Toggler = () => {
    const isChecked = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(isChecked)

    return(
        <>
            <input type='checkbox' value={isChecked} onChange={() => {
                dispatch({type: 'SWITCH_PRIVACY', payload: ['title']})
            }}/>
        </>
    )
}
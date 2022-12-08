import React from "react";
import { Sidebar } from './sidebar';
import { MessageField } from "./messageField";

export const MeetingRoom = () => {

    return (
        <div className="App">
            <div className="workSpace">
                <Sidebar />
                <MessageField />
            </div>
        </div>
    )
}
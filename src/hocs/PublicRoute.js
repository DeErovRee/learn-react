import React from "react";
import { Route, Navigate } from "react-router-dom";

export const PublicRoute = ({ authenticated, ...rest }) => {
    return !authenticated ? <Route {...rest} /> : <Navigate to="/chats" />
;
}
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Users from "./Users";
import User from "./User";


export default function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/users/',
            children: [
                {
                    path: "",
                    element: <Users/>,
                },
                {
                    path: ':id',
                    element: <User></User>
                }
            ]
        },
        {
            path: 'wtf',
            element: <>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</>
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])
    return routes;
}
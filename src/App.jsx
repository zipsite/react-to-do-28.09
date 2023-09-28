import Routes from "./Routes"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Menu from "./Menu"

export default function App() {
    return (
        <div>
            {/* <p>hdihfdhjfhdjsfhjd</p> */}
            <Router className="layout">
                <Menu></Menu>
                <Routes />
            </Router>
        </div>
    )
}
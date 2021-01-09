import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./actionBar.css"
export default class ActionBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <Link to="/"><button type="button" className="btn btn-warning left">todos</button></Link>
                <Link to="/newtodo"><button type="button" className="btn btn-warning right">new</button></Link>
            </div>
            </nav>
            
        )
    }
}

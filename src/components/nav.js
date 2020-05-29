import React, {Component} from "react"
import "../App.css"
import logo from "../assets/data/logo1.png"
// import {Link} from "react-router-dom"


class Nav extends Component {
    render() {
        const imgStyle = {
            height: '200px',
            width: '200px',
            margin: '10px',
          }
        return (
            <nav className='nav'>
                    <img src={logo} style={imgStyle}/>
            </nav>
        )
    }
}

export default Nav
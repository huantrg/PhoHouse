import React, {Component} from "react"
import "../App.css"
import cover from "../assets/data/cover.jpg"


class Cover extends Component {
    render() {
        return (
            <img className="cover" src={cover}/>
        )
    }
}

export default Cover
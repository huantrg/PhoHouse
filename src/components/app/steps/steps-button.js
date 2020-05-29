import React, { Component } from "react"
import { isBrowser, isMobile } from "react-device-detect"

export default class StepsButton extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.course)
  }

  render() {
    if(isBrowser){
    return (
      <button className={`button ${this.props.className} ${this.props.active ? '-active' : ""} ${this.props.disabled ? '-disabled' : ""}`} onClick={this.handleClick}>
        {this.props.courseName}
      </button>
    )
    }
    if(isMobile){
      return (
        <button className={`button-mobile ${this.props.className} ${this.props.active ? '-active' : ""} ${this.props.disabled ? '-disabled' : ""}`} onClick={this.handleClick}>
          {this.props.courseName}
        </button>
      )
    }
  }
}

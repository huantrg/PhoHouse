import React, { Component } from "react"
import { getAllCourseNames } from "../../../utils/courseName"
import ButtonPanel from "./steps-button-panel"
import { isBrowser , isMobile} from "react-device-detect"

export default class StepsContainer extends Component {
  handleClick = course => {

      this.props.changeCourse(course)
  }

  render() {
    if(isBrowser){
    return (
      <div className={`steps-container ${this.props.summary ? "-hide" : ""}`}>
        <ButtonPanel
          courses={getAllCourseNames()}
          clickHandler={this.handleClick}
          activeCourse={this.props.course}
        />
      </div>
    )
    }
    if(isMobile){
      return(
        <div className={`steps-container-mobile`}>
        <ButtonPanel
          courses={getAllCourseNames()}
          clickHandler={this.handleClick}
          activeCourse={this.props.course}
        />
      </div>
      )
    }
  }
}

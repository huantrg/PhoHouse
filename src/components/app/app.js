import React, { Component } from "react"
import Order from "./order"
import Steps from "./steps"
import Nav from "../nav"
import Cover from "../cover"
import Contact from "../contact"
import "./app.scss"
import Crsl from "../carousel"
import Footer from "../footer"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: 0,
      summary: false
    }
  }

  handleCourse = (course = 0) => {
    this.setState({ course })
  }

  handleSummary = () => {
    this.setState({ summary: !this.state.summary })
  }

  render() {
    return (
      <main className="app">
        <Nav/>
        <Crsl/>
        <h1 className="title">
          {this.state.summary ? "Your order: " : "Restaurant Menu"}
        </h1>
        <Steps
          {...this.state}
          changeCourse={this.handleCourse}
          summaryHandler={this.handleSummary}
        />
        <Order
          {...this.state}
          changeCourse={this.handleCourse}
          summaryHandler={this.handleSummary}
        />
        <Cover/>
        <Footer/>
      </main>
    )
  }
}

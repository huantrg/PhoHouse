import React, { Component } from "react"
import { getCourseName } from "../../../utils/courseName"
import OrderSummaryView from "./order-summary-view"

export default class OrderSummary extends Component {
  render() {
    const { selectedItems } = this.props
    const sum = 0
    return Object.keys(selectedItems).map(item => {
      if (selectedItems[item].length !== 0) {
        let courseItems = []
        for (let i = 0; i < selectedItems[item].length; i++) {
          courseItems.push(selectedItems[item][i])
          sum += courseItems[i].price
        }
        return (
          <div>
          <OrderSummaryView
            key={item}
            courseTitle={getCourseName(item)}
            courseItems={courseItems}
          />
          {/* <h4>Total: {sum.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h4> */}
          </div>
        )
      }
    })
  }
}

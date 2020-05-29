import React, { Component } from "react"
import OrderItem from "./order-item"
import Grid from "@material-ui/core/Grid"
import getItemIndex from "../../../utils/itemIndex"
import { isBrowser, isMobile } from "react-device-detect"

export default class OrderView extends Component {
  handleClick = (id, itemTitle, itemPrice) => {
    this.props.itemHandler(id, itemTitle, itemPrice)
  }

  render() {
    if (isBrowser) {
      return this.props.courseItems.map(res => (
        <Grid item xs={4} key={res.id}>
          <OrderItem
            id={res.id}
            itemTitle={res.title}
            itemPrice={res.price}
            itemNo = {res.no}
            itemAllergy={res.allery}
            itemDescription={res.description}
            itemImage={res.image}
            itemHandler={this.handleClick}
            className="order-item"
            selected={
              getItemIndex(this.props.selectedItems[this.props.course], res.id) >= 0
            }
          />
        </Grid>
      ))
    }
    if (isMobile) {
      return this.props.courseItems.map(res => (
        <Grid item xs={12} key={res.id}>
          <OrderItem
            id={res.id}
            itemTitle={res.title}
            itemNo={res.no}
            itemPrice={res.price}
            itemAllergy={res.allery}
            itemDescription={res.description}
            itemImage={res.image}
            itemHandler={this.handleClick}
            className="order-item"
            selected={
              getItemIndex(this.props.selectedItems[this.props.course], res.id) >= 0
            }
          />
        </Grid>
      ))
    }
  }
}

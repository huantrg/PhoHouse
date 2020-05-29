import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

export default class OrderItem extends Component {
  handleClick = () => {
    this.props.itemHandler(this.props.id, this.props.itemTitle, this.props.itemPrice)
  }

  render() {
    return (
      <Card
        className={`${this.props.className} ${
          this.props.selected ? "-selected" : ""
        }`}
      >
        <CardActionArea onClick={this.handleClick}>
          <CardMedia
            component="img"
            alt={this.props.itemTitle}
            height="140em"
            image={this.props.itemImage}
            title={this.props.itemTitle}
          />
          <CardContent>
            <h6 className="item-title">{this.props.itemTitle}  #{this.props.itemNo} </h6>  
            <Typography
              variant="h6"
              component="h6"
              className="item-info"
            >
              {this.props.itemPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="item-desc"
            >
              {this.props.itemDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

import React from 'react';
import Carousel from 'nuka-carousel';
import "../App.css"

class Crsl extends React.Component {
  render() {
    return (
      <Carousel className ="carousel" autoplay="true">
        <img src="https://www.coyyiontis.com.au/wp-content/uploads/2019/10/CY_Solid_House_0340-1920x1281.jpg" />
        <img src="https://i.imgur.com/GePMMRJ.jpg" />
        <img src="https://i.imgur.com/R2R1uoW.jpg" />
        <img src="https://i.imgur.com/xtQ9Uoo.jpg" />
        <img src="https://i.imgur.com/aO4KS3g.jpg" />
        <img src="https://i.imgur.com/Q1deKu6.jpg" />
        <img src="https://i.imgur.com/wRIIbPo.jpg" />
      </Carousel>
    );
  }
}

export default Crsl
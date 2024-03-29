import React from "react";
import "../App.js";
import Carousel from "react-bootstrap/Carousel";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

function Titulo() {
  return (
    <div class="container-fluid w-50 py-4">
      <div row>
        <Carousel>
          <Carousel.Item interval={2500}>
            <img src={img7} alt="" class="d-block w-100" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={img8} alt="" class="d-block w-100" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={img9} alt="" class="d-block w-100" />
            <Carousel.Caption d-none></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Titulo;

import React from 'react'
import styled from 'styled-components';
import pixar from "./Images/viewers-pixar.png";
import national from "./Images/viewers-national.png";
import starwars from "./Images/viewers-starwars.png";
import disney from "./Images/viewers-disney.png";
import marvel from "./Images/viewers-marvel.png";
import disney_video from "./videos/disney.mp4"
import pixar_video from "./videos/pixar.mp4"
import national_video from "./videos/national.mp4"
import starwars_video from "./videos/star-wars.mp4"
import marvel_video from "./videos/marvel.mp4"

function View() {
  return (
    <Container>
      <Wrap>
        <img src={pixar} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={pixar_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={national} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={national_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={marvel} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={marvel_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={starwars} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={starwars_video} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={disney} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={disney_video} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  )
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
video{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  z-index:0;
  opacity:0;
}
&:hover{
  border-color:rgba(249,249,249,0.94);
  video{
    opacity:1;
  }
}
`;
export default View;

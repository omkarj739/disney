import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import slider_one from "./Images/slider-badag.jpg";
import slider_two from "./Images/slider-badging.jpg"
import slider_three from "./Images/slider-scale.jpg"
import slider_fourth from "./Images/slider-scales.jpg"

function ImgSlider() {
    let settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        slideToShow: 1
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src={slider_one} alt="slider_img_1" />
                </a>
            </Wrap>
            <Wrap>
                <a><img src={slider_two} alt="slider_img_2" /> </a>
            </Wrap>
            <Wrap>
                <a><img src={slider_three} alt="slider_img_3" />  </a>
            </Wrap>
            <Wrap>
                <a><img src={slider_fourth} alt="slider_img_4" /></a>
            </Wrap>
        </Carousel>
    )
};

const Carousel = styled(Slider)`
    margin-top:20px;
    & >button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }

ui li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,175);
    }
}
li.slick-active button:before{
    color:white;
    font-size:0.7rem;
}
.slick-list{
    overflow:initial;
}
.slick-prev{
    left:-75px;
}
.slick-next{
    right:-75px;
}
`;

const Wrap = styled.div`
    cursor:pointer;
    position:relative; 
    a{
        position:relative;
        display:block;
        border-radius:4px;
        padding:6px;
        box-shadow:rgba( 0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%)0px 16px 10px -10px ;
    }
    img{
        width:100%;
        height:100%;
    }
    &:hover{
        padding:0;
        border:4px solid rgba(249,249,249,0.8);
        transition-dureation:300ms;
        overflow:hidden;
    }
`;
export default ImgSlider;

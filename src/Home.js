import React, { useEffect } from 'react'
import styled from "styled-components";
import background from "./Images/home-background.png";
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recomend from './Recomend';
import Trending from './Trending';
import View from './View';
import db from "./firebase"
import { movies } from "./movieSlice";
import { loginUser } from "./userSlice"
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

  const dispatch = useDispatch();
  const userName = useSelector(loginUser);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = []

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        movies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);


  return (
    <Container>
      <ImgSlider />
      <View />
      <Recomend />
      <Originals />
      <Trending />
      <NewDisney />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url(${background}) center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
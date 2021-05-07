import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "./firebase";

const Detail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc) {
          setInfo(doc.data());
        } else {
          prompt("No Doc In Database")
        }
      }).catch(() => {
        prompt("No file In Database");
      })
  }, [id]);


  return (
    <Container>
      <Background>
        <img src={info.backgroundImg} alt="" />
      </Background>

      <ImgTitle>
        <img src={info.titleImg} alt="" />
      </ImgTitle>
      <Content>
        <SubTitle>{info.subTitle}</SubTitle>
        <Description>{info.description}</Description>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
  }
`;
const ImgTitle = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const Content = styled.div`
  max-width: 874px;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
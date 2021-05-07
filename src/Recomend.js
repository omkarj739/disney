import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setRecommend } from "./movieSlice";

const Recommends = (props) => {
  const movies = useSelector(setRecommend);

  return (
    <Container>
      <h2>Recommended for You</h2>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/details/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
margin-top:3rem;

`;

const Content = styled.div`
margin-top:3rem;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
padding-top:50%;
position:relative;
border-radius:4px;
box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px ,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
overflow:hidden;
cursor:pointer;
border:4px solid rgba(249,249,249,0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
    inset:0px;
    width:100%;
    height:100%;
    display:block;
    object-fit:cover;
    position:absolute;
    opacity:1;
    border-radius:4px;
    transition: opacity 500ms ease-in-out 0s;
    z-index:1;
    top:0;
    }
    &:hover {
        border:3px solid rgba(249,249,249,0.5);
        transform:scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;

export default Recommends;

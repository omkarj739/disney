import React, { useEffect } from 'react';
import header_logo from "./Images/logo.svg";
import home from "./Images/home-icon.svg"
import search from "./Images/search-icon.svg";
import watchList from "./Images/watchlist-icon.svg";
import originals from "./Images/original-icon.svg";
import movies from "./Images/movie-icon.svg";
import series from "./Images/series-icon.svg";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import { signInUser, loginUser, loginPhoto, signoutUser } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

const Header = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const userName = useSelector(loginUser);
    const userPhoto = useSelector(loginPhoto);


    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                history.push("/home")
            }
        })
    }, [userName])

    const authUser = () => {
        if (!userName) {
            auth
                .signInWithPopup(provider)
                .catch(() => {
                    alert("Something Went Wrong")
                }).then((result) => {
                    console.log(result);
                    setUser(result.user);
                })
        }
        else {
            auth
                .signOut()
                .then(() => {
                    dispatch(
                        signoutUser(),
                        history.push("/")
                    )
                })
                .catch((err) => {
                    prompt("Can't Log Out")
                })
        }
    };


    const authUserSignOut = () => {
        if (userName) {
            auth.signOut()
                .then((user) => {
                    dispatch(
                        signoutUser(user))
                    history.push('/');
                }).catch((err) => {
                    alert("Cant log out")
                })
        }
    }

    const setUser = (user) => {
        dispatch(
            signInUser({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Navigation>
            <Logo>
                <img src={header_logo} alt="header_logo" />
            </Logo>
            {
                (!userName) ?
                    (
                        <SignIn onClick={authUser}>
                            <span>LOGIN</span>
                        </SignIn>
                    )
                    :
                    <>
                        <Nav>
                            <a href="/home">
                                <img src={home} alt="home_icon" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src={search} alt="SEARCH" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src={watchList} alt="WATCHLIST" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src={originals} alt="ORIGINALS" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src={movies} alt="MOVIES" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src={series} alt="SERIES" />
                                <span>SERIES</span>
                            </a>
                        </Nav>
                        <Login >
                            <img src={userPhoto} />
                            <Hover>
                                <span onClick={authUser}>Sign Out</span>
                            </Hover>
                        </Login>
                    </>
            }
        </Navigation>
    )
};

const Navigation = styled.div`
    position:fixed;
    top:0;
    right:0;
    left:0;
    height:70px;
    background-color: #090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;     
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;
    img:{
        display:block;
        width:100%;
    }
`;

const Logo = styled.div`
height:4rem;
width:4rem;
margin-top:1.5rem;
`;

const Nav = styled.div`
align-items: center;
display: flex;
flex:1;
flex-flow: row nowrap;
height: 100%;
${'' /* justify-content: flex-end; */}
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;
a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px 0 4px;
    white-space: nowrap;
    position: relative;
    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }
  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
}
@media (max-width: 768px) {
    display: none;
  } 
`;

const SignIn = styled.div`
display:flex;
letter-spacing:2px;
border:1px solid grey;
padding:0.7rem;
border-radius:4px;
cursor:pointer;
    `;
const Hover = styled.div`
    color:white;    
    position:absolute;
    right:1rem;
    letter-spacing:2px;
    padding:0.5rem;
    border-radius:4px;
    cursor:pointer;
    opacity:0;
    background:rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
        `;

const Login = styled.div`
img {
height:3rem;
border-radius:25px;
}
    &:hover{
        ${Hover}{
            opacity:1;
            transition-duration:1s;
        }
    }
}
`;



export default Header;


import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Link to="intro" spy={true} smooth={true}>
        <h2>MovieLand</h2>
      </Link>
      <div>
        <Link to="intro" spy={true} smooth={true}>
          <p>Introduce</p>
        </Link>
        <Link to="movieList" spy={true} smooth={true}>
          <p>Movie list</p>
        </Link>
        <Link to="footer" spy={true} smooth={true}>
          <p>Developer</p>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1d282e;

  h2 {
    margin: 0 0 0 10px;
    padding-left: 193px;
    cursor: pointer;
    color: #3281b9;
  }

  div {
    padding-right: 197px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      padding-left: 20px;
      color: #fff;
      transition: all 0.5s;
    }

    p:hover {
      color: #bce1fb;
      cursor: pointer;
    }
  }
`;

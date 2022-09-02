import React from "react";
import styled from "styled-components";

export default function IntroPage() {
  return (
    <>
      <Container id="intro">
        <img src="/img/Group1.png" alt="" id="img1" />
        <img src="/img/Group2.png" alt="" id="img2" />
        <Wrapper>
          <div>
            <h2>Movie</h2>
            <h2>recommendation</h2>
            <p>Get recommendations from various movies!</p>
          </div>
          <img src="/img/MovieMan.png" alt="" />
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  height: 90vh;
  padding-top: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* overflow: hidden; */
  background: #0e4c75;

  #img1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
    height: auto;
  }

  #img2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: 1070px;
  padding: 0 0 170px 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  div {
    padding: 20px 0 0 167px;
  }

  h2 {
    margin: 0;
    padding: 0 0;
    font-size: 70px;
    color: #fff;
  }

  p {
    margin: 8px 0;
    font-size: 30px;
    color: #fff;
  }

  img {
    position: absolute;
    top: 180px;
    right: 200px;
    width: 30%;
    height: auto;
  }
`;

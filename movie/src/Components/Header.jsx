import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h2>MovieLand</h2>
      <div>
        <p>Introduce</p>
        <p>Movie list</p>
        <p>developer</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1d282e;

  h2 {
    margin: 0 0;
    padding-left: 193px;
    color: #3281b9;
  }

  div {
    padding-right: 207px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      padding-left: 20px;
      color: #fff;
    }
  }
`;

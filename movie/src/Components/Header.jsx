import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #1d282e;

  h2 {
    margin: 0 0;
    padding-left: 16px;
    color: #3281b9;
  }
`;

export default function Header() {
  return (
    <Container>
      <h2>MovieLand</h2>
    </Container>
  );
}

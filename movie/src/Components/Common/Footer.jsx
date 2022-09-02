import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container id="footer">
      <Wrapper>
        <Frame>
          <div id="div1">
            <p>developer</p>
            <p>Contributor</p>
            <p>Site that helped</p>
          </div>
          <div id="div2">
            <p>Lim SuBeen</p>
            <p>Nomad Coders</p>
            <p>https://nomadcoders.co/react-for-beginners/lobby</p>
          </div>
          <div className="div3">
            <a href="https://www.facebook.com/profile.php?id=100064560693847">
              <img src="/img/Footer/facebook.png" alt="" />
            </a>
            <a href="https://www.instagram.com/subin_253/">
              <img src="/img/Footer/instagram.png" alt="" />
            </a>
            <a href="https://github.com/waterbeen0530">
              <img src="/img/Footer/github.png" alt="" />
            </a>
          </div>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  color: #fff;
  background: #0e4c75;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div`
  position: relative;
  width: 73%;
  margin: 25px 0 25px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
  #div1 {
    padding: 0;
  }

  #div2 {
    padding: 0 0 0 35px;
  }

  .div3 {
    position: absolute;
    bottom: 0;
    right: 0;
    gap: 0;
    height: auto;
    margin: 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    a {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      img {
        width: 50%;
      }
    }
  }
`;

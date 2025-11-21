//rafce
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
    font-size: 74px;
`;
const WhatWeDo = styled.div`
display: flex;
    align-items: center;
    gap: 10px;
`;
const Line = styled.img`
height: 5px;
`;
const Subtitle = styled.h2`

`;
const Desc = styled.p`

`;
const Button = styled.button`

`;
const Img = styled.img`
object-fit: contain;
height: 600px;
width: 800px;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;


@keyframes animate {
  to {
    transform: translateY(20px);
  }
}
`;
const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
            <Title>Think. Make. Solve.</Title>
            <WhatWeDo>
                <Line src="./img/line.png" />
                <Subtitle>We enjoy creating delightful, human-centered digital experiences.</Subtitle>
            </WhatWeDo>
            <Desc>
                We believe that great design is the foundation of great products.
                We help our clients to create products that are not only functional
                but also beautiful and user-friendly.
            </Desc>
            <Button>Learn More</Button>
        </Left>
        <Right>
            <Img src="./img/moon.png" alt="Moon Image" />
        </Right>
      </Container>
    </Section>
  );
};


export default Hero;
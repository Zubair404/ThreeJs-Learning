//rafce
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
    flex: 1;
    
`;
const Right = styled.div`
  flex: 1;
  /* position: relative; */
  display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
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
    color: #da4ead;
`;
const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ead;
  width: 120px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d Model */}
        </Left>
        <Right>
            <Title>Think Outside The Square Space</Title>
            <WhatWeDo>
                <Line src="./img/line.png" />
                <Subtitle>Who We Are.</Subtitle>
            </WhatWeDo>
            <Desc>
                A creative group of designers and developers with a passion for the arts
            </Desc>
            <Button>See Our Work</Button>
        </Right>
      </Container>
    </Section>
  );
};


export default Who;
//rafce
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { Canvas } from "@react-three/fiber";
import { Sphere , MeshDistortMaterial, OrbitControls } from "@react-three/drei";

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
  height: 100%;
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
const Subtitle = styled.h2``;
const Desc = styled.p``;
const Button = styled.button``;
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
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>
              We enjoy creating delightful, human-centered digital experiences.
            </Subtitle>
          </WhatWeDo>
          <Desc>
            We believe that great design is the foundation of great products. We
            help our clients to create products that are not only functional but
            also beautiful and user-friendly.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={2} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial color={"#3d1c56"} attach="material" distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" alt="Moon Image" /> 
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

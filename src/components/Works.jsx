//rafce
import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";

const data = [
  "Web Design",
  "App Development",
  "Product Design",
];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-stroke: 1px white;
  &::after {
    content: attr($text);
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width 1.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
const Works = () => {
  const [works, setWorks] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} $text={item} onClick={() => setWorks(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {works === "Web Design" ? (
            <WebDesign />
          ) : works === "App Development" ? (
            <Development />
          ) : works === "Product Design" ? (
            <ProductDesign />
          ) : null}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;

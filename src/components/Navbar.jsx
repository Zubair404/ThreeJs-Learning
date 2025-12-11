//rafce
import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
display: flex;
justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const Links = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 100px;
  height: auto; 
`;
const List = styled.ul`
    gap: 20px;
display: flex;
align-items: center;
list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;

`;
const Icons = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  gap: 20px;
  display: flex;
  align-items: center;
  width: 20px;
  cursor: pointer;
   
`;
const Button = styled.button`
  background-color: #da4ead;
  width: 100px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src='./img/logo.png' />
                <List>
                    <ListItem onClick={() => console.log("Home clicked")}>Home</ListItem>
                    <ListItem onClick={() => console.log("Studio clicked")}>Studio</ListItem>
                    <ListItem onClick={() => console.log("Works clicked")}>Works</ListItem>
                    <ListItem onClick={() => console.log("Contact clicked")}>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src='./img/search.png' />
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}
export default Navbar
//rafce
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  position: relative;
  z-index: 1;
`;
const MapBackground = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  position: relative;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const FormWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 32px 24px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 500px;
`;
const Button = styled.button`
  background-color: #da4ead;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-weight: bold;
  cursor: pointer;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const Right = styled.div`
  flex: 1;
  height: 100%; // Set height to 100% for the right section
  display: flex;
  justify-content: center; // Center the map horizontally
  align-items: center; // Center the map vertically
  flex-direction: column;
`;

const Contacts = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const HandleSubmit = (e) => {
  e.preventDefault();
  
  emailjs
      .sendForm('service_ch0u3zk', 'template_2qz5tuj', ref.current, 'n77BxM-crEmYZ_cr5')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        },
      );
};
  return (
    <Section>
      
      <Container>
        <Left>
          <FormWrapper>
            <Form ref={ref} onSubmit={HandleSubmit}>
              <Title>Contact Us</Title>
              <Input type="text" placeholder="Your Name" name='name' />
              <Input type="email" placeholder="Your Email" name='email' />
              <TextArea type="text" maxLength={2000} placeholder="Your Message" rows={10} name='message' />
              <Button type="submit">Send</Button>
              {success && "Your message has been sent. We'll get back to you soon!"}
            </Form>
          </FormWrapper>
        </Left>
        <Right>
          <MapBackground>
            <Map />
          </MapBackground>
        </Right>
      </Container>
    </Section>
  );
};

export default Contacts;

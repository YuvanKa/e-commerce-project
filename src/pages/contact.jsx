import React from "react";
import styled from "styled-components";
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
`;


const Title = styled.h1`
  font-weight: normal
  font-size: 10pt
  line-height: $font-size * 2
  font-style: italic
  margin: 0 0 .5em 0
  colour: blue;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 20px 20px;
  background-color: #0077ff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0060cb;
  }
`;


export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // implement form submission logic here
  };

  return (
    <ContactWrapper>
      <Title className="contact">Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <Input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <TextArea id="message" name="message" required></TextArea>
        <Button type="submit">Send</Button>
      </Form>
    </ContactWrapper>
  );
};
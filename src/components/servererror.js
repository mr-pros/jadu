import React from 'react';
import styled from 'styled-components';
import serverErrorImage from '../images/server.png'

const ErrorPageContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f3f3f3;
  text-align: center;
  padding: 50px;
`;

const ErrorHeading = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
`;


const ErrorImage = styled.img`
  width: 200px;
  height: 200px;
`;

const ServerErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorHeading>500 Internal Server Error</ErrorHeading>
      <ErrorMessage>We're sorry, but the server encountered an internal error and could not fulfill your request.</ErrorMessage>
      <ErrorMessage>Please try again later.</ErrorMessage>
      <ErrorMessage>Due to heavy traffic, the server is currently unable to handle the request. Please try again in a few minutes.</ErrorMessage>
      <ErrorImage src={serverErrorImage} alt="Server Error" />
    </ErrorPageContainer>
  );
};

export default ServerErrorPage;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Super Deal ! Free Shopping on Ordrs Over ₹100</Container>;
};

export default Announcement;

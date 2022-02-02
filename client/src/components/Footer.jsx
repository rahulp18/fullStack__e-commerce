import React from 'react';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material';

import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: 700;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: 500;
`;
const SocialIcons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })};
`;
const List = styled.h1`
  margin: 0;
  padding: 0;
  list-item: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  margin-bottom: 10px;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })};
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DIMPLE</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the major There are many variations of passages of Lorem Ipsum
          available, but the major There are many variations of passages of
          Lorem Ipsum available, but the major
        </Desc>
        <SocialContainer>
          <SocialIcons color="3B5999">
            <Facebook />
          </SocialIcons>
          <SocialIcons color="E4405F">
            <Instagram />
          </SocialIcons>
          <SocialIcons color="55ACEE">
            <Twitter />
          </SocialIcons>
          <SocialIcons color="E60023">
            <Pinterest />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Acccessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          754025, Choudwar,Cuttack
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +919777060598
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          pradhanrahul3346@gcebpatna.ac.in
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
      </Right>
    </Container>
  );
};

export default Footer;

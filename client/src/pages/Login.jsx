import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '90%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const MyLink = styled.p`
  margin: 5px 0px;
  font-weight: 400;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;
const Button = styled.button`
  width: 90%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <MyLink>
            {' '}
            Don't have an account ?
            <Link to="/register">
              <b>Register</b>
            </Link>
          </MyLink>
          <MyLink>
            <Link to="/forgotpassword">Forgot Password</Link>{' '}
          </MyLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';

export const LoginForm = styled(Card)`
  color: black;
`;

export const LoginFormTitle = styled(Card.Title)`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const PasswordCheck = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PasswordLabel = styled(Form.Label)`
  margin: 0px 0px 5px 0px;
  padding-right: 20px;
`;

export const LoginButton = styled(Button)`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
`;

export const NoAccount = styled.div`
  padding-top: 20px;
`;

import styled from 'styled-components';
import { Button, Card, Form } from 'react-bootstrap';

export const SignupForm = styled(Card)`
  color: black;
`;

export const SignupFormTitle = styled(Card.Title)`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const EmailLabel = styled(Form.Label)`
  margin: 0px 0px 5px 0px;
  padding-right: 20px;
`;

export const PasswordCheck = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PasswordLabel = styled(Form.Label)`
  margin: 0px 0px 5px 0px;
  padding-right: 20px;
`;

export const SignupButton = styled(Button)`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
`;

export const AlreadyHaveAccount = styled.div`
  padding-top: 20px;
`;

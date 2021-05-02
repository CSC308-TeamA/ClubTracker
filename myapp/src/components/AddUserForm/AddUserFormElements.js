import styled from 'styled-components';
import { Button, Form, Modal } from 'react-bootstrap';

export const AddUserButton = styled(Button)`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80px;
  right: 15px;
  z-index: 1;
`;

export const AddUserModal = styled(Modal)`
  color: black;
`;

export const AddUserLabel = styled(Form.Label)`
  text-align: right;
  vertical-align: middle;
  margin-top: 7px;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

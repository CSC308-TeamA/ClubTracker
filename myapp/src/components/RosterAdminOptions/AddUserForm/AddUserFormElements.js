import styled from 'styled-components';
import { Form, Modal } from 'react-bootstrap';

export const AddUserModal = styled(Modal)`
  color: black;
`;

export const Title = styled.h3`
  color: black;
`;

export const FirstSection = styled.h4`
  color: black;
  text-align: center;
  font-weight: 700;
`;

export const Section = styled.h4`
  color: black;
  text-align: center;
  font-weight: 700;
  padding-top: 45px;
`;

export const AddUserLabel = styled(Form.Label)`
  margin-top: 0px;
  font-weight: 600;
`;

export const PrivateComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const PrivateLabel = styled(Form.Label)`
  margin: 0px;
`;

export const StatusComponent = styled.div`
  display: inline;
  padding-right: 20px;
`;

export const StatusRadio = styled(Form.Check)`
  padding-right: 5px;
  margin-right: 0px;
`;

export const StatusLabel = styled(Form.Label)`
  margin-top: 0px;
  font-weight: 600;
`;

export const SpecializationComponent = styled.div`
  display: inline;
  padding-right: 20px;
`;

export const SpecializationRadio = styled(Form.Check)`
  padding-right: 5px;
  margin-right: 0px;
`;

export const SpecializationLabel = styled(Form.Label)`
  margin-top: 0px;
  font-weight: 600;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

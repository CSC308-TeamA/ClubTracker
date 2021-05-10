import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

export const FilterForm = styled(Form)`
  margin: 5px 15px;
  color: black;
  background-color: white;
`;

export const FilterFormRow = styled(Form.Row)`
  margin: 10px;  
`;

export const FilterFormGroup = styled(Form.Group)`
  margin: 0px;
`;

export const FilterButton = styled(Button)`
  margin: 10px 2px 10px 10px;
  padding: 30px 20px;
  font-size: 16px;
  font-weight: 600;
`;

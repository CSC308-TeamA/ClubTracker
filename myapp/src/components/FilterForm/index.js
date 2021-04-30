import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form as BootStrapForm, Col } from 'react-bootstrap';
import NewCard from './FilterFormElements';

function Form(props) {
  const [field, setField] = useState(
    {
      name: '',
      stat: '',
      role: '',
      posit: '',
      special: '',
    },
  );

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'name') {
      setField(
        {
          name: value,
          stat: field.stat,
          role: field.role,
          posit: field.posit,
          special: field.special,
        },
      );
    }
    if (name === 'stat') {
      setField(
        {
          name: field.name,
          stat: value,
          role: field.role,
          posit: field.posit,
          special: field.special,
        },
      );
    }
    if (name === 'role') {
      setField(
        {
          name: field.name,
          stat: field.stat,
          role: value,
          posit: field.posit,
          special: field.special,
        },
      );
    }
    if (name === 'posit') {
      setField(
        {
          name: field.name,
          stat: field.stat,
          role: field.role,
          posit: value,
          special: field.special,
        },
      );
    }
    if (name === 'special') {
      setField(
        {
          name: field.name,
          stat: field.stat,
          role: field.role,
          posit: field.posit,
          special: value,
        },
      );
    }
  }

  function submitForm() {
    props.handleSubmit(field);
  }

  return (
    <NewCard>
      <BootStrapForm>
        <BootStrapForm.Row>
          <BootStrapForm.Group as={Col} controlId="formBasicPassword">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                value={field.name}
                onChange={handleChange}
              />
            </label>
          </BootStrapForm.Group>
          <BootStrapForm.Group as={Col} controlId="formBasicPassword">
            <label htmlFor="stat">
              Status
              <select name="stat" id="stat" onChange={handleChange}>
                <option value="">Any</option>
                <option value="Pending">Pending</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
          </BootStrapForm.Group>
          <BootStrapForm.Group as={Col} controlId="formBasicPassword">
            <label htmlFor="role">
              Role
              <select name="role" id="role" onChange={handleChange}>
                <option value="">Any</option>
                <option value="Member">Member</option>
                <option value="Officer">Officer</option>
                <option value="Advisor">Advisor</option>
              </select>
            </label>
          </BootStrapForm.Group>
          <BootStrapForm.Group as={Col} controlId="formBasicPassword">
            <label htmlFor="special">
              Specialization
              <select name="special" id="special" onChange={handleChange}>
                <option value="">Any</option>
                <option value="Design">Design</option>
                <option value="Fabrication">Fabrication</option>
                <option value="Electronics">Electronics</option>
                <option value="Assembly">Assembly</option>
                <option value="Programming">Programming</option>
                <option value="Media">Media</option>
                <option value="Business">Business</option>
                <option value="Scouting">Scouting</option>
                <option value="Pit Crew">Pit Crew</option>
                <option value="Drive Team">Drive Team</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </BootStrapForm.Group>
          <input type="button" value="Filter" onClick={submitForm} />
        </BootStrapForm.Row>
      </BootStrapForm>
    </NewCard>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import {
  FilterForm,
  FilterFormRow,
  FilterFormGroup,
  FilterButton,
} from './FilterElements';

function Filter(props) {
  const [field, setField] = useState(
    {
      name: '',
      stat: '',
      role: '',
      // posit: '',
      special: '',
    },
  );

  function handleChange(event) {
    const { name, value } = event.target;
    const temp = { ...field };

    temp[name] = value;
    setField(temp);
  }

  function submitForm() {
    props.handleSubmit(field);
  }

  return (
    <FilterForm>
      <FilterFormRow>
        <FilterFormGroup as={Col} controlId="formBasicPassword">
          <FilterForm.Label htmlFor="name">
            Name
          </FilterForm.Label>
          <input
            type="text"
            name="name"
            value={field.name}
            onChange={handleChange}
          />
        </FilterFormGroup>

        <FilterFormGroup as={Col} controlId="formBasicPassword">
          <FilterForm.Label htmlFor="stat">
            Status
          </FilterForm.Label>
          <select name="stat" id="stat" onChange={handleChange}>
            <option value="">Any</option>
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </FilterFormGroup>

        <FilterFormGroup as={Col} controlId="formBasicPassword">
          <FilterForm.Label htmlFor="role">
            Role
          </FilterForm.Label>
          <select name="role" id="role" onChange={handleChange}>
            <option value="">Any</option>
            <option value="Member">Member</option>
            <option value="Officer">Officer</option>
            <option value="Advisor">Advisor</option>
          </select>
        </FilterFormGroup>

        <FilterFormGroup as={Col} controlId="formBasicPassword">
          <FilterForm.Label htmlFor="special">
            Specialization
          </FilterForm.Label>
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
        </FilterFormGroup>

        <FilterFormGroup>
          <FilterButton onClick={submitForm}>
            Filter
          </FilterButton>
        </FilterFormGroup>
      </FilterFormRow>
    </FilterForm>
  );
}

Filter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Filter;

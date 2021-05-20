import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import {
  FilterForm, FilterFormRow, FilterFormGroup, FilterButton,
} from './FilterElements';
import {
  status, positions, specializations,
} from './FilterProperties';

function Filter({ handleSubmit }) {
  const [field, setField] = useState(
    {
      name: '',
      member_status: '',
      position: '',
      specialization: '',
    },
  );

  function handleChange(event) {
    const { name, value } = event.target;
    const temp = { ...field };

    temp[name] = value;
    setField(temp);
  }

  function submitForm() {
    handleSubmit(field);
  }

  return (
    <FilterForm>
      <FilterFormRow>
        <FilterFormGroup as={Col} controlId="formBasicPassword">
          <FilterForm.Label htmlFor="name">
            Name
          </FilterForm.Label>
          <FilterForm.Control
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
          <FilterForm.Control
            as="select"
            defaultValue=""
            name="member_status"
            onChange={handleChange}
          >
            {status.map((s) => (
              <option
                key={s.id}
                value={s.value}
                id={s.id}
              >
                {s.name}
              </option>
            ))}
          </FilterForm.Control>
        </FilterFormGroup>

        <FilterFormGroup as={Col} controlId="formBasicPassword">
          <FilterForm.Label htmlFor="position">
            Position
          </FilterForm.Label>
          <FilterForm.Control
            as="select"
            defaultValue=""
            name="position"
            onChange={handleChange}
          >
            {positions.map((p) => (
              <option
                key={p.id}
                value={p.value}
                id={p.id}
              >
                {p.name}
              </option>
            ))}
          </FilterForm.Control>
        </FilterFormGroup>

        <FilterFormGroup as={Col} controlId="formBasicPassword">
          <FilterForm.Label htmlFor="special">
            Specialization
          </FilterForm.Label>
          <FilterForm.Control
            as="select"
            defaultValue=""
            name="specialization"
            onChange={handleChange}
          >
            {specializations.map((spec) => (
              <option
                key={spec.id}
                value={spec.value}
                id={spec.id}
              >
                {spec.name}
              </option>
            ))}
          </FilterForm.Control>
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

import React, { useState } from 'react'
import { Button } from 'react-bootstrap/Button'
import styles from '../styles/TeamRoster.module.css'

function Form(props) {
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "name")
      setField(
        {
          name: value,
          stat: field['stat'],
          role: field['role'],
          posit: field['posit'],
          special: field['special']
        }
      );
    if (name === "stat")
      setField(
        {
          name: field['name'],
          stat: value,
          role: field['role'],
          posit: field['posit'],
          special: field['special']
        }
      );
    if (name === "role")
      setField(
        {
          name: field['name'],
          stat: field['stat'],
          role: value,
          posit: field['posit'],
          special: field['special']
        }
      );
    if (name === "posit")
      setField(
        {
          name: field['name'],
          stat: field['stat'],
          role: field['role'],
          posit: value,
          special: field['special']
        }
      );
    if (name === "special")
      setField(
        {
          name: field['name'],
          stat: field['stat'],
          role: field['role'],
          posit: field['posit'],
          special: value
        }
      );
  }

  function submitForm() {
    props.handleSubmit(field);
  }

  const [field, setField] = useState(
    {
      name: '',
      stat: '',
      role: '',
      posit: '',
      special: ''
    }
  );

  return (
    <form className={styles.filterForm}>
      <label htmlFor="name" className={styles.filterFormLabel}>Name</label>
      <input
        type="text"
        name="name"
        value={field.name}
        onChange={handleChange} />

      <label htmlFor="stat" className={styles.filterFormLabel}>Status</label>
      <select name="stat" id="stat" onChange={handleChange}>
        <option value="">Any</option>
        <option value="Active">Active</option>
      </select>

      <label htmlFor="role" className={styles.filterFormLabel}>Role</label>
      <select name="role" id="role" onChange={handleChange}>
        <option value="">Any</option>
        <option value="Member">Member</option>
        <option value="Officer">Officer</option>
        <option value="Advisor">Advisor</option>
      </select>

      <label htmlFor="special" className={styles.filterFormLabel}>Specialization</label>
      <select name="special" id="special" onChange={handleChange}>
        <option value="">Any</option>
        <option value="Design">Design</option>
        <option value="Fabrication">Fabrication</option>
        <option value="Programming">Programming</option>
      </select>

      <input type="button" value="Filter" onClick={submitForm} className={styles.filterFormButton} />
    </form>
  );
}

export default Form;

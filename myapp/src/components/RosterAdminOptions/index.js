import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import AddUserForm from './AddUserForm/index';
import DownloadCSV from './DownloadCSV/index';
import AdminOptionsDropdown from './RosterAdminOptionsElements';

function RosterAdminOptions({ characterData, handleSubmit }) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleHide() {
    setShow(false);
  }

  return (
    <>
      <AdminOptionsDropdown>
        <DropdownButton as={ButtonGroup} title="Admin Options " drop="up" menuAlign="right">
          <Dropdown.Item eventkey="addMember" onClick={handleShow}>
            Add a Member
          </Dropdown.Item>
          <DownloadCSV characterData={characterData} />
        </DropdownButton>
      </AdminOptionsDropdown>

      <AddUserForm
        handleSubmit={handleSubmit}
        showForm={show}
        handleHide={handleHide}
      />
    </>
  );
}

RosterAdminOptions.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  characterData: PropTypes.node.isRequired,
};

export default RosterAdminOptions;

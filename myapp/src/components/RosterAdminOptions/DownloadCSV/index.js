import React from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import CSVHeaders from './DownloadCSVProperties';

function DownloadCSV({ characterData }) {
  return (
    <CSVLink
      headers={CSVHeaders}
      data={characterData}
      filename="TeamRoster.csv"
      target="_blank"
      className="dropdown-item"
    >
      Download CSV
    </CSVLink>
  );
}

DownloadCSV.propTypes = {
  characterData: PropTypes.node.isRequired,
};

export default DownloadCSV;

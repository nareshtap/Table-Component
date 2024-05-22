import React from 'react';
import PropTypes from 'prop-types';

function Table({ 
  name, 
  border = '1px solid black', 
  padding = '8px', 
  borderCollapse = 'collapse', 
  backgroundColor = 'white', 
  color = 'black', 
  textAlign = 'left', 
  header1, 
  header2, 
  data1, 
  data2
}) {
  const cellStyle = {
    border,
    padding,
    backgroundColor,
    color,
    textAlign,
  };

  return (
    <div>
      <h2>{name}</h2>
      <table style={{ borderCollapse }}>
        <thead>
          <tr>
            <th style={cellStyle}>{header1}</th>
            <th style={cellStyle}>{header2}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>{data1}</td>
            <td style={cellStyle}>{data2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  name: PropTypes.string.isRequired,
  border: PropTypes.string,
  padding: PropTypes.string,
  borderCollapse: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  header1: PropTypes.node,
  header2: PropTypes.node,
  data1: PropTypes.node,
  data2: PropTypes.node,
};

export default Table;

import PropTypes from 'prop-types';
import React from 'react';
import {TableColumns} from './Table.interface';

interface TableComponent {
  columns: TableColumns
}

const TableComponent: React.FC<TableComponent> = ({}) => {
  return (
    <div>

    </div>
  );
};

TableComponent.propTypes = {};

TableComponent.defaultProps = {};

export default TableComponent;

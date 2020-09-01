import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Row.scss';

type Spacing = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Row {
  children: React.ReactNode;
  spacing?: Spacing;
}

const Row: React.FC<Row> = ({
  children,
  spacing = 2
}) => {
  const className = cn(
    'row',
    `row--spacing-${spacing}`
  );
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Row.propTypes = {};

Row.defaultProps = {};

export default Row;

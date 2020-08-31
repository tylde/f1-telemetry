import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Column {
  children: React.ReactNode;
  xs?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
}
const Column: React.FC<Column> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl
}) => {
  const className = cn(
    'col',
    {[`col--xs-${xs}`]: typeof xs === 'number'},
    {[`col--sm-${sm}`]: typeof sm === 'number'},
    {[`col--md-${md}`]: typeof md === 'number'},
    {[`col--lg-${lg}`]: typeof lg === 'number'},
    {[`col--xl-${xl}`]: typeof xl === 'number'}
  );
  return (
    <div className={className}>
      {children}
    </div>
  );
};

Column.propTypes = {};

Column.defaultProps = {};

export default Column;

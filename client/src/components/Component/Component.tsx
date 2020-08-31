import PropTypes from 'prop-types';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

interface Component {
  children: React.ReactNode;
}

const Component: React.FC<Component> = ({
  children
}) => {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
};

Component.propTypes = {};

Component.defaultProps = {};

export default Component;

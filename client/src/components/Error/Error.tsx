import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Error.scss';

interface Error {
  message?: string;
  status: number;
}

const getStatusType = (status: number): string => {
  const statusString = status.toString();
  if (statusString.startsWith('4')) {
    return 'client-error';
  }
  if (statusString.startsWith('5')) {
    return 'server-error';
  }
  return 'unknown';
};

const Error: React.FC<Error> = (
  {
    message = '',
    status
  }) => (
  <div className={cn('error-component', `error-component--${getStatusType(status)}`)}>
    <div className='error-component__status'>{status}</div>
    <div className='error-component__message'>{message}</div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
  status: PropTypes.number.isRequired
};

Error.defaultProps = {
  message: ''
};

export default Error;

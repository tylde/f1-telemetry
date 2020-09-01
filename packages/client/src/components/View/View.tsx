import PropTypes from 'prop-types';
import React from 'react';

import './View.scss';

interface View {
  children: React.ReactNode;
}

const View: React.FC<View> = ({
  children
}) => {
  return (
    <section className='view'>
      {children}
    </section>
  );
};

View.propTypes = {};

View.defaultProps = {};

export default View;

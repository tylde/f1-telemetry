import PropTypes from 'prop-types';
import React from 'react';

interface AppFooter {}

const AppFooter: React.FC<AppFooter> = () => {
  return (
    <footer className='app-footer'>
      <div>
        Footer
      </div>
    </footer>
  );
};

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;

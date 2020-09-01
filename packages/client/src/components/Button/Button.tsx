import React from 'react';
import PropTypes from 'prop-types';

import Mock from '../Mock/Mock';

interface Button {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Button> = ({
  children,
  onClick
}) => {
    return (
        <div onClick={onClick} style={{cursor: 'pointer', userSelect: 'none', width: 'fit-content'}}>
          <Mock width='fit-content' height='32px'>
            {children}
          </Mock>
        </div>
    );
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;

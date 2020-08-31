import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './LinkButton.scss';

import {Button, ButtonStyle, ElementColor, ElementSize} from '@emblem-ui/core';

interface LinkButton {
  block?: boolean;
  children: React.ReactNode,
  elementStyle?: ButtonStyle;
  elementColor?: ElementColor;
  elementSize?: ElementSize;
  disabled?: boolean;
  to: string
}

const LinkButton: React.FC<LinkButton> = ({
  block,
  children,
  elementStyle,
  elementColor = 'primary',
  elementSize,
  disabled,
  to
}) => {
    return (
        <Link className='link-button' to={to} tabIndex={-1}>
          <Button
            block={block}
            disabled={disabled}
            elementColor={elementColor}
            elementSize={elementSize}
            elementStyle={elementStyle}
          >
            {children}
          </Button>
        </Link>
    );
};

LinkButton.propTypes = {};

LinkButton.defaultProps = {};

export default LinkButton;

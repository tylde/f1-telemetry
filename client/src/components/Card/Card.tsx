import cn from 'classnames';
import React from 'react';

import './Card.scss';

interface Card {
  children: React.ReactNode;
  height?: 'fill' | 'fit'
}

const Card: React.FC<Card> = ({
  children,
  height = 'fit'
}) => {
  const className = cn(
    'card-component',
    {'card-component--fill': height === 'fill'},
    {'card-component--fit': height === 'fit'}
  );
  return (
    <div className='card-component'>
      {children}
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;

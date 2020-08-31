import React, {useState} from 'react';
import Widget from '../components/Widget/Widget';

interface WithWidget {}

const withWidget = <T extends WithWidget>(Component: React.ComponentType<T>) => {
  const WithWidget: React.FC<T> = (props) => {
    return (
      <Widget>
        <Component {...props as T} />
      </Widget>
    );
  };

  WithWidget.propTypes = {};

  WithWidget.defaultProps = {};

  return WithWidget;
};

export default withWidget;

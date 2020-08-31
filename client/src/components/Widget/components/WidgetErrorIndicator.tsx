import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './WidgetErrorIndicator.scss';

import Button from '../../Button/Button';
import useWidget from '../../../hooks/useWidget';

interface WidgetErrorIndicator {
  children: React.ReactNode;
}

const WidgetErrorIndicator: React.FC<WidgetErrorIndicator> = ({
  children
}) => {
  const {widgetError, resetWidgetError} = useWidget();

  const tryAgain = useCallback(() => {
    resetWidgetError();
  }, []);

  if (!widgetError) {
    return <>{children}</>;
  }

  const {code} = widgetError;
  const message = code.startsWith('4') ? 'Website error.' : 'Server error.';

  return (
    <div className='widget-error-indicator'>
      <span>
        <FontAwesomeIcon icon='frown' />
      </span>
      <span>
        {message}
      </span>
      <Button onClick={tryAgain}>
        Try Again
      </Button>
    </div>
  );
};

WidgetErrorIndicator.propTypes = {};

WidgetErrorIndicator.defaultProps = {};

export default WidgetErrorIndicator;

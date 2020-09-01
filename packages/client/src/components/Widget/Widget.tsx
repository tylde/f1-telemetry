import PropTypes from 'prop-types';
import React from 'react';

import Card from '../Card/Card';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import WidgetProvider from '../../context/widget/WidgetProvider';
import WidgetErrorIndicator from './components/WidgetErrorIndicator';

interface Widget {
  children: React.ReactNode;
}

const Widget: React.FC<Widget> = ({
  children
}) => (
  <ErrorBoundary>
    <WidgetProvider>
      <Card>
        <WidgetErrorIndicator>
          {children}
        </WidgetErrorIndicator>
      </Card>
    </WidgetProvider>
  </ErrorBoundary>
);

Widget.propTypes = {};

Widget.defaultProps = {};

export default Widget;

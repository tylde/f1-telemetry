import React, {useCallback, useState} from 'react';

import WidgetContext, {WidgetError} from './WidgetContext';
import useLocalStorage from '../../hooks/useLocalStorage';

interface WidgetProvider {
  children?: React.ReactNode;
}

const WidgetProvider: React.FC<WidgetProvider> = ({
  children
}) => {
  const [widgetError, setWidgetError] = useState<WidgetError | null>(null);
  const resetWidgetError = useCallback(() => setWidgetError(null), []);

  return (
    <WidgetContext.Provider value={{
      widgetError,
      setWidgetError,
      resetWidgetError
    }}>
      {children}
    </WidgetContext.Provider>
  );
};

export default WidgetProvider;

import React from 'react';

export interface WidgetError {
  code: string;
  description: string;
}

// TODO setErrorFromData setErrorFromResponse

export interface WidgetContextInterface {
  widgetError: WidgetError | null;
  setWidgetError(error: WidgetError | null): void;
  resetWidgetError(): void;
}

const WidgetContext = React.createContext<WidgetContextInterface>({
  widgetError: null,
  setWidgetError: () => {},
  resetWidgetError: () => {}
});

export default WidgetContext;

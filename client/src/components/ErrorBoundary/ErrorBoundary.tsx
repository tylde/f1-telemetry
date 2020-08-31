import React, {ErrorInfo} from 'react';

import './ErrorBoundary.scss';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError', {error})
    return {hasError: true};
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('componentDidCatch', {error, info})
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    if (hasError) {
      return (
        <div className='error-boundary'>

        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'src/pages/PageError/PageError';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, inf: ErrorInfo) {
    console.log(error, inf);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError error={error} /> 
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

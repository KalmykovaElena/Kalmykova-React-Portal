/* eslint-disable no-unused-vars */
import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'src/pages/PageError/PageError';

interface ErrorBoundaryProps{
    children: ReactNode
}
interface ErrorBoundaryState{
    hasError: boolean
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, inf: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, inf);
    }

    render() {
        const {hasError}=this.state;
        const {children}=this.props;
        if (hasError) {
            return (
                <Suspense fallback=''>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export  default ErrorBoundary;
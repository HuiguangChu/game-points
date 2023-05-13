import React, { ErrorInfo, memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styles from './ErrorBoundaryHoc.scss';

interface ComponentProps {
    children: React.ReactNode;
    fallback?: string | React.ReactNode;
}

const ErrorBoundaryHoc = memo(({ children, fallback }: ComponentProps) => {
    const logError = (error: Error, info: ErrorInfo) => {
        console.log(error, info);
        // TODO: log with trackjs or some other tracking platform
    };

    const errorFallback = () => (
        <div role="alert" className={styles.errorFallbackWrapper}>
            {
                fallback
              || (
                  <p>
                      <b>Something went wrong!</b>
                      {' '}
                      <br />
                      Please try to refresh the page or report to the customer service!
                  </p>
              )
            }

        </div>
    );

    return (
        <ErrorBoundary onError={logError} fallback={errorFallback()}>
            {children}
        </ErrorBoundary>
    );
});

export default ErrorBoundaryHoc;

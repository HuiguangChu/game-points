import React, { FC, memo } from 'react';
import styles from './App.scss';
import PlayerBoard from '../views/playerBoard/PlayerBoard';
import ResultBoard from '../views/resultBoard/ResultBoard';
import ErrorBoundaryHoc from './ErrorBoundary/ErrorBoundaryHoc';

const App: FC = memo(() => {
    return (
        <div className={styles.appWrapper}>
            <ErrorBoundaryHoc>
                <PlayerBoard />
            </ErrorBoundaryHoc>
            <ErrorBoundaryHoc>
                <ResultBoard />
            </ErrorBoundaryHoc>
        </div>
    );
});

export default App;

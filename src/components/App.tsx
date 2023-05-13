import React, { FC, memo } from 'react';
import styles from './App.scss';
import PlayerBoard from '../views/playerBoard/PlayerBoard';
import ResultBoard from '../views/resultsBoard/ResultBoard';

const App: FC = memo(() => {
    return (
        <div className={styles.appWrapper}>
            <PlayerBoard />
            <ResultBoard />
        </div>
    );
});

export default App;

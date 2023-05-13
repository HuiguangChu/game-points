import React, { FC, memo } from 'react';
import styles from './App.scss';
import PlayerBoard from '../views/playerBoard/PlayerBoard';

const App: FC = memo(() => {
    return (
        <div className={styles.appWrapper}>
            <PlayerBoard />
        </div>
    );
});

export default App;

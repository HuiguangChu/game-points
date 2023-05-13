import React, { FC, KeyboardEvent, memo } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import { itemsDefinition, ItemType } from '../../services/pointsService';
import styles from './PlayerBoard.scss';
import { onItemClick } from '../../redux/dashboard/actions';

const PlayerBoard: FC = memo(() => {
    const dispatch = useDispatch();

    const onkeydown = (event: KeyboardEvent): void => {
        // Enter key code
        if (event.code === 'Enter') {
            if (event.currentTarget) {
                const targetValue: ItemType = event.currentTarget.getAttribute('data-value') as ItemType;
                dispatch(onItemClick(targetValue));
            }
        }
    };
    const renderItems = () => Object.keys(itemsDefinition).map((key: ItemType) => {
        const handleOnItemClick = () => dispatch(onItemClick(key));

        return (
            <li
                className={styles.item}
                key={key}
                onClick={handleOnItemClick}
                tabIndex={0}
                data-value={key}
                onKeyDown={onkeydown}
                role="tab"
                aria-label="Click to colection item"
                aria-selected
            >
                {key}
            </li>
        );
    });

    return (
        <div className={styles.playerBoard}>
            <Header titleCaption="Kahoot! Points" />
            <ul className={styles.itemsContainer} role="tablist">
                {renderItems()}
            </ul>
        </div>
    );
});

export default PlayerBoard;

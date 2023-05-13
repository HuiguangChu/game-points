import React, { FC, Fragment, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import styles from './ResultBoard.scss';
import {
    calculateBonuses,
    calculateTotalPoints,
    ItemType,
    calculatePointsForEachItem,
} from '../../services/pointsService';
import Button from '../../components/Button/Button';
import { restartGame } from '../../redux/dashboard/actions';
import Table from '../../components/Table/Table';
import { AppRootState } from '../../redux/store';

const ResultBoard: FC = memo(() => {
    const { itemsCollection } = useSelector((state: AppRootState) => state.dashboard);
    const dispatch = useDispatch();
    const onRestartGame = () => dispatch(restartGame());

    const renderTable = () => {
        const bodyRows: React.ReactNode = itemsCollection && Object.keys(itemsCollection).map((itemKey: ItemType) => {
            return (
                <tr key={itemKey}>
                    <td>{itemKey}</td>
                    <td>{itemsCollection[itemKey]}</td>
                    <td>{calculatePointsForEachItem(itemsCollection[itemKey], itemKey)}</td>
                </tr>
            );
        });

        const headerRows: React.ReactNode = (
            <tr>
                {
                    ['Item', 'Qty', 'Score'].map((el: string) => <th key={el}>{el}</th>)
                }
            </tr>
        );
        const footerRows: React.ReactNode = (
            <Fragment>
                <tr>
                    <th>Bonuses</th>
                    <th>{}</th>
                    <th>{calculateBonuses(itemsCollection)}</th>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>{}</th>
                    <th>{calculateTotalPoints(itemsCollection)}</th>
                </tr>
            </Fragment>
        );
        return (
            <Table
                fixed
                bodyRows={bodyRows}
                headerRows={headerRows}
                footerRows={footerRows}
            />
        );
    };

    const renderContent = (): React.ReactNode => {
        if (!Object.keys(itemsCollection).length) {
            return (
                <div className={styles.emptyContent}>
                    No items collected!
                </div>
            );
        }

        return (
            <Fragment>
                {renderTable()}
                <div className={styles.bottomAction}>
                    <Button text="New Game" onClick={onRestartGame} />
                </div>
            </Fragment>
        );
    };

    return (
        <div className={styles.resultsBoard}>
            <Header titleCaption="Player items" />
            {renderContent()}
        </div>
    );
});

export default ResultBoard;

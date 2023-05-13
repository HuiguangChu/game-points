import { action } from 'typesafe-actions';
import { ItemType } from '../../services/pointsService';

export enum ActionTypes {
    ON_ITEM_CLICK = 'dashboard/ON_ITEM_CLICK',
    RESTART_GAME = 'dashboard/RESTART_GAME',
}

export type DashboardAction = OnItemClickAction | RestartGameAction;

interface OnItemClickAction {
    type: ActionTypes.ON_ITEM_CLICK;
    payload: {
        item: ItemType
    }
}

interface RestartGameAction {
    type: ActionTypes.RESTART_GAME;
}

export const onItemClick = (item: ItemType): OnItemClickAction => action(
    ActionTypes.ON_ITEM_CLICK,
    {
        item,
    }
);

export const restartGame = (): RestartGameAction => action(ActionTypes.RESTART_GAME);

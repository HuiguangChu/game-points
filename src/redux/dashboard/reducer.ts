import { ItemType } from '../../services/pointsService';
import { ActionTypes, DashboardAction } from './actions';

export interface DashboardState {
    itemsCollection: ItemsCollection;
}

export type ItemsCollection = {
   [key in ItemType]: number;
}

const initialState: DashboardState = {
    itemsCollection: {} as ItemsCollection,
};

export const dashboardReducer = (state: DashboardState = initialState, action: DashboardAction): DashboardState => {
    switch (action.type) {
    case ActionTypes.ON_ITEM_CLICK:
        return {
            ...state,
            itemsCollection: {
                ...state.itemsCollection,
                [action.payload.item]: state.itemsCollection[action.payload.item]
                    ? state.itemsCollection[action.payload.item] + 1
                    : 1,
            },
        };
    case ActionTypes.RESTART_GAME:
        return initialState;
    default:
        return state;
    }
};

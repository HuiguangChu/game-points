import { ItemType } from '../../services/pointsService';
import { ActionTypes, DashboardAction } from './actions';
import {
    getItemsCollectionFromLocalStorage,
    removeItemsCollectionFromLocalStorage,
    storeItemsCollectionFromLocalStorage,
} from '../../services/localStorage';

export interface DashboardState {
    itemsCollection: ItemsCollection;
}

export type ItemsCollection = {
   [key in ItemType]?: number;
}

export const initialState: DashboardState = {
    itemsCollection: getItemsCollectionFromLocalStorage(),
};

const updateItemsCollection = (state: DashboardState, item: ItemType): DashboardState => {
    const updatedItemsCollection: ItemsCollection = {
        ...state.itemsCollection,
        [item]: state.itemsCollection[item]
            ? state.itemsCollection[item] + 1
            : 1,
    };
    storeItemsCollectionFromLocalStorage(updatedItemsCollection);

    return {
        ...state,
        itemsCollection: {
            ...updatedItemsCollection,
        },
    };
};

export const dashboardReducer = (state: DashboardState = initialState, action: DashboardAction): DashboardState => {
    switch (action.type) {
    case ActionTypes.ON_ITEM_CLICK:
        return updateItemsCollection(state, action.payload.item);
    case ActionTypes.RESTART_GAME:
        removeItemsCollectionFromLocalStorage();

        return {
            ...state,
            itemsCollection: {},
        };
    default:
        return state;
    }
};

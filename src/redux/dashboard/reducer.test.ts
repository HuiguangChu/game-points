import { dashboardReducer, DashboardState, initialState } from './reducer';
import { onItemClick, restartGame } from './actions';
import { ItemType } from '../../services/pointsService';

describe('dashboardReducer test', () => {
    const initialStateMock = {
        ...initialState,
        itemsCollection: {
            [ItemType.A]: 1,
        },
    };

    it('should load initial state if no action triggered', () => {
        const state: DashboardState = dashboardReducer(undefined, {} as any);

        expect(state).toEqual(initialState);
    });
    it('should set item value to 1 on action ON_ITEM_CLICK triggered with initialState', () => {
        const expectedState: DashboardState = {
            ...initialState,
            itemsCollection: {
                [ItemType.A]: 1,
            },
        };

        const state: DashboardState = dashboardReducer(initialState, onItemClick(ItemType.A));
        expect(state).toEqual(expectedState);
    });

    it('should not set item value to 1  if itemsCollection state is not empty on action ON_ITEM_CLICK triggered ', () => {
        const expectedState: DashboardState = {
            ...initialState,
            itemsCollection: {
                [ItemType.A]: 2,
            },
        };

        const state: DashboardState = dashboardReducer(initialStateMock, onItemClick(ItemType.A));
        expect(state).toEqual(expectedState);
    });

    it('should reset itemsCollection on action RESTART_GAME triggered', () => {
        const state: DashboardState = dashboardReducer(initialStateMock, restartGame());
        expect(state).toEqual(initialState);
    });
});

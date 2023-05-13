import {
    combineReducers, configureStore, Reducer, Store,
} from '@reduxjs/toolkit';
import { dashboardReducer, DashboardState } from './dashboard/reducer';

export interface AppRootState {
    dashboard: DashboardState;
}

const reducer: Reducer = combineReducers({ dashboard: dashboardReducer });

const store: Store = configureStore({
    reducer,
});

export default store;

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers';

const rootReducer = combineReducers({
    moviesState: movieReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

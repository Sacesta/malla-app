import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { MyMallaApi } from '../slice';


const appReducers = combineReducers({
    myMallaApi: MyMallaApi.reducer,
});

const rootReducer = (state, action) => {

    return appReducers(state, action);
}

export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: true,
        immutableCheck: true,
    }).concat(MyMallaApi.middleware),
});

setupListeners(store.dispatch)
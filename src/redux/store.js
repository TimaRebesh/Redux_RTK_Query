import { configureStore } from "@reduxjs/toolkit";
import { commentsApi } from "./commentsApi";
import tabbarReducer from './tabBarSlice';

const store = configureStore({
    reducer: {
        tabbar: tabbarReducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentsApi.middleware),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import  commentsApi  from "./commentsApi";
import  usersApi  from "./usersApi";
import tabbarReducer from './tabBarSlice';

const store = configureStore({
    reducer: {
        tabbar: tabbarReducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(commentsApi.middleware)
        .concat(usersApi.middleware)
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersAp.middleware),
});

export default store;

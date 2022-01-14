import { configureStore } from "@reduxjs/toolkit";
import { commentsApi } from "./commentsApi";

const store = configureStore({
    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentsApi.middleware),
});

export default store;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: () => 'comments'
        })
    })
}) 

export const { useGetCommentsQuery } = commentsApi;

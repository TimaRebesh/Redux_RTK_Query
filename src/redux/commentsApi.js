import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
    reducerPath: 'commentApi',
    tagTypes: 'commentsList',   // for auto update after POST, DELETE, ...
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: () => 'comments',
            providesTags: (result) => result    // for auto update after POST, DELETE, ...
                ?
                [
                    ...result.map(({ id }) => ({ type: 'commentsList', id })),
                    { type: 'commentsList', id: 'LIST' }
                ]
                :
                [{ type: 'commentsList', id: 'LIST' }]
        }),
        addNewComments: builder.mutation({
            query: (body) => {
                return {
                    url: 'comments',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags:  [{ type: 'commentsList', id: 'LIST' }] // for auto update after POST, DELETE, ...
        }),
        removeComments: builder.mutation({
            query: (id) => ({
                url: `comments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:  [{ type: 'commentsList', id: 'LIST' }] // for auto update after POST, DELETE, ...
        })
    })
})

export const { useGetCommentsQuery, useAddNewCommentsMutation, useRemoveCommentsMutation } = commentsApi;

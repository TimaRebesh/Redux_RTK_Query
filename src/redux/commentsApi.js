import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const commentsApi = createApi({
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
            query: (value) => {
                return {
                    url: 'comments',
                    method: 'POST',
                    body: { text: value }
                }
            },
            invalidatesTags: [{ type: 'commentsList', id: 'LIST' }] // for auto update after POST
        }),
        removeComments: builder.mutation({
            query: (id) => ({
                url: `comments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'commentsList', id: 'LIST' }] // for auto update after DELETE
        }),
        editComment: builder.mutation({
            query: ({ id, value }) => ({
                url: `comments/${id}`,
                method: 'PATCH',
                body: { text: value }
            }),
            invalidatesTags: [{ type: 'commentsList', id: 'LIST' }] // for auto update after PATCH
        })
    })
})

export const { useGetCommentsQuery, useAddNewCommentsMutation, useRemoveCommentsMutation, useEditCommentMutation } = commentsApi;

export default commentsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: 'usersList',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
            providesTags: (result) => result    // for auto update after POST, DELETE, ...
                ?
                [
                    ...result.map(({ id }) => ({ type: 'usersList', id })),
                    { type: 'usersList', id: 'LIST' }
                ]
                :
                [{ type: 'usersList', id: 'LIST' }]
        }),
    })
})

export const  { useGetUsersQuery } = userApi;

export default userApi;

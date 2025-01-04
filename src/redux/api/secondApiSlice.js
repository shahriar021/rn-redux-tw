import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const secondApi = createApi({
  reducerPath: 'secondApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
    }),

    createUser: builder.mutation({
      query: newData => ({
        url: '/users',
        method: 'post',
        body: newData,
      }),
    }),

    updateUser: builder.mutation({
      query: newData => ({
        url: `/users/${newData.id}`,
        method: 'put',
        body: newData,
      }),
    }),
  }),
});

export const {useGetUsersQuery, useCreateUserMutation, useUpdateUserMutation} =
  secondApi;

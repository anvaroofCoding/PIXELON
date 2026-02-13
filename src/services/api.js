import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://portfolio-nijy.onrender.com/api/',
	}),
	endpoints: builder => ({
		getPosts: builder.query({
			query: () => 'murojaat',
		}),

		getPostById: builder.query({
			query: id => `murojaat/${id}`,
		}),

		postMessage: builder.mutation({
			query: formData => ({
				url: 'murojaat/',
				method: 'POST',
				body: formData,
			}),
		}),

		deleteMessage: builder.mutation({
			query: id => ({
				url: `murojaat/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Messages'],
		}),
	}),
})

export const { usePostMessageMutation } = api

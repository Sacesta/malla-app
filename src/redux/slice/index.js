import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseUrl, EndPoints } from '../../service';

export const MyMallaApi = createApi({
    reducerPath: 'myMallaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseUrl
    }),


    endpoints: (builder) => ({
        getBranding: builder.query({ query: () => ({ url: EndPoints.branding, method: 'GET' }) }),
    })
})

export const {
    useGetBrandingQuery,
} = MyMallaApi;

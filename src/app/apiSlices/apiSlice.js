import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery(
    {
        baseUrl: "pyapi.webtusk.com"
    }
)
export const generalApiSlice = createApi({
    baseQuery,
    tagTypes: ["courses"],
    endpoints: (builder) => ({})
})
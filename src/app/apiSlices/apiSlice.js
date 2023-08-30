import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery(
    {
        baseUrl: "http://pyapi.tusksite.com:8080/"
    }
)
export const generalApiSlice = createApi({
    baseQuery,
    tagTypes: ["courses"],
    endpoints: (builder) => ({})
})
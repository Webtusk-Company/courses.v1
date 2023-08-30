import { generalApiSlice } from "./apiSlice";

const BASE_URL = "/api/v1/courses"

export const getCoursesSlice = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>(
        {
            getCourses: builder.query({
                query: ()=>({
                    method: "GET",
                    url: `${BASE_URL}/`
                })
            })
        }
    )
});

export const {useGetCoursesQuery} = getCoursesSlice;
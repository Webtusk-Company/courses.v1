import { generalApiSlice } from "./apiSlice";

const HEAD_URL = "/api/v1/courses"

export const createNewCourseMutation = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>({
        createNewCourse: builder.mutation({
            query: (data) =>({
                method: "POST",
                body: data
            })
        })
    })
});

export const {useCreateNewCourseMutation} = createNewCourseMutation;
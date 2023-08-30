import { configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./dataSlices/courseSlice";
import { generalApiSlice } from "./apiSlices/apiSlice";

export const store = configureStore(
    {
        reducer: {
            course: courseSlice.reducer,
            [generalApiSlice.reducerPath]: generalApiSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(generalApiSlice.middleware),
            devtools: true
    }
)
import { configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "./dataSlices/courseSlice";
import { generalApiSlice } from "./apiSlices/apiSlice";
import {courseCreationSlice} from "./dataSlices/courseCreationSlice"

export const store = configureStore(
    {
        reducer: {
            course: courseSlice.reducer,
            courseCreation: courseCreationSlice.reducer,
            [generalApiSlice.reducerPath]: generalApiSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(generalApiSlice.middleware),
            devtools: true
    }
)
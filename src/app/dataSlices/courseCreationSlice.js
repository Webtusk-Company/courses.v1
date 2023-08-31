import { createSlice } from "@reduxjs/toolkit";




let initialState = {
   
        id: "",
    title: "",
    vendor: "",
    description: "",
    duration: "",
    has_discount: false,
    onetime_payment: false,
    recurring_payment: false,
    price: "",
    activation_status: false,
    category: [],
    course_image: "",
    registered_users: [],
    discount_percentage: "",
    certificate: "",
}


export const courseCreationSlice = createSlice({
    name: "courseCreation",
    initialState,
    reducers: {
        updateCourse: (state, action) =>{
            console.log(action.payload);
            state = action.payload
            console.log(state);
        }
    }
});

export const {updateCourse} = courseCreationSlice.actions;
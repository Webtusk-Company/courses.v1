import { CoursesList } from "../assets/components/CoursesList";
import { useEffect, useState } from "react";
import { useGetAuthTokenMutation } from "../app/apiSlices/authSlice";



export const Courses = () =>{
    const [getToken] = useGetAuthTokenMutation();
    // const [ token , setToken] = useState("");
    //  console.log(token);
    return (
        <>
        {
        //     token !== "" &&
        //     <CoursesList token={token}></CoursesList>
        // 
        }
        </>
    )
}
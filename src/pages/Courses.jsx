import { useGetCoursesQuery } from "../app/apiSlices/courseSlices";
import { useGetAuthTokenMutation} from "../app/apiSlices/authSlice";
import { CoursesList } from "../assets/components/CoursesList";
import { useLoaderData } from "react-router-dom";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { tokenSet } from "../app/dataSlices/tokenSlice";

export const Courses = () =>{
    const [username, setUserName] = useState("");
    const [ password, setPassword] = useState("");
    const [ gottenTokenState, setGottenTokenState] = useState(false);
    // const [token, setToken] = useState(true)
    const [ createAuthToken, {isLoading}] = useGetAuthTokenMutation();
    const dispatch= useDispatch();
    const token = import.meta.env.VITE_API_KEY;
    return (
        <>
         <CoursesList token={token}></CoursesList>
        </>
    )
}
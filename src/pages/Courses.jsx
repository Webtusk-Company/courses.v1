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
    const [token, setToken] = useState(true)
    const [ createAuthToken, {isLoading}] = useGetAuthTokenMutation();
    const dispatch= useDispatch();
    const GetMyData = async (data) =>{
        data.preventDefault();
        // console.log(data.target)
        await createAuthToken({
            username,
            password,
        }).then((res) =>{
            // console.log(res);
            if(res.data){
                setToken(res.data.access);
                dispatch(tokenSet(res.data.access))
                setGottenTokenState(true);
            }
        })
        // console.log(response)
    }
    return (
        <>
        { gottenTokenState && <CoursesList token = {token}></CoursesList>}
        {!gottenTokenState && 
            <div className="w-80 h-80">
                <h2>Put in your username and password</h2>
                <form onSubmit={GetMyData}> 
                <input onChange={(e) => { setUserName(e.target.value)}} value={username} type="text" placeholder="Username" />
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="lk;asdklfjkl"></input>
                <input type="file" className="bg-transparent" onChange={(e) => console.log(e.target.files[0])}></input>
                
                <button type="submit">
                    Submit
                </button>
                </form>
            </div>
        }
        </>
    )
}

import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../app/dataSlices/courseCreationSlice";
import { useState } from "react";
export const NewCourse = () =>{
    const [defaultCourse, setDefaultCourse] = useState(useSelector((state)=> state.courseCreation));
    const [updatedCourse, setUpdateCourse] = useState()
    const dispatch = useDispatch();
    const title = useSelector((state) => state.courseCreation.title);
    console.log(title)
    // console.log(defaultCourse)
    const setCourse = (type, value, tobj) =>{
        let newObj = {...tobj};
        newObj[type] = value;
        dispatch(updateCourse(newObj));
        // setDefaultCourse();
    }

    return (
       <main className="w-[100%] h-[100%] bg-white p-3  rounded-md shadow font-noirpro">
            <header className="mb-2">
                <h2 className="ml-3 text-lg">
                    Create New Course
                </h2>
            </header>
            <form className="flex flex-row items-start justify-between w-[100%]">
                <div className="w-[60%] flex flex-col p-1 ml-3">
                    <div className="w-full flex flex-col">
                        <label htmlFor="Course Title">Course Title</label>
                        <input onChange={(e) => setCourse("title", e.target.value, defaultCourse)}  type="text" className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                        </input>
                    </div>
                    <div className="w-full flex flex-col mt-2">
                        <label htmlFor="Course Title">Course Description</label>
                        <textarea className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                        </textarea>
                    </div>
                </div>
                <div className="w-[40%] m-3 h-[25rem] relative p-3">
                    <header>
                        <h2>
                            Course Preview
                        </h2>
                        <h4>
                            This is what your course will look like to your users
                        </h4>
                    </header>
                    <section className="w-full h-full flex flex-row items-center justify-center bg-white">
                            <h1>{title}</h1>
                            <h2>{""}</h2>
                    </section>
                </div>
            </form>
       </main>
    )
}
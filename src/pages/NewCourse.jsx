
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../app/dataSlices/courseCreationSlice";
import { useState, useEffect } from "react";
import { Button } from "../assets/components/Kobobutton";
import { Link } from "react-router-dom"
export const NewCourse = () =>{
    const defaultCourse = useSelector((state)=> state.courseCreation);
    // const [updatedCourse, setUpdateCourse] = useState();
    const dispatch = useDispatch();
    const title = useSelector((state) => state.courseCreation.title);
    const description = useSelector((state) => state.courseCreation.description);
    // console.log(title)
    // console.log(defaultCourse)
    const setCourse = (type, value, tobj) =>{
        let newObj = {...tobj};
        newObj[type] = value;
        dispatch(updateCourse(newObj));
        // setDefaultCourse();
    }
    useEffect(() =>{
        console.log(title);
    })
    return (
       <main className="w-[100%] h-[100%] bg-white p-3  rounded-md shadow text-gray-900 font-noirpro">
            <header className="mb-2 flex flex-row justify-between pr-8">
                <h2 className="ml-3 text-lg">
                    Create New Course
                </h2>
                <Link to="/courses">
                    <Button color={"bg-gray-500"}>
                        Go Back
                    </Button>
                </Link>
              
            </header>
            <section className='w-full flex flex-row'>
                <form className="w-[55%]">
                    <div className="w-[100%] flex flex-col p-1 ml-3 mr-8">
                        <div className="w-full flex flex-col">
                            <label htmlFor="Course Title">Course Title</label>
                            <input onChange={(e) => setCourse("title", e.target.value, defaultCourse)}  type="text" className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                            </input>
                        </div>
                        <div className="w-full flex flex-col mt-2">
                            <label htmlFor="Course Title">Course Description</label>
                            <textarea rows={3} cols={5} onChange={(e) => setCourse("description", e.target.value, defaultCourse)} className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                            </textarea>
                        </div>
                        <div className="flex flex-row justify-end mt-3">
                           <Button color="bg-gray-900">
                             Next
                           </Button>
                        </div>
                    </div>
                </form>
                <div className="w-[45%] h-[30rem] relative p-5 mx-4">
                    <header>
                        <h2>
                            Course Preview
                        </h2>
                        <h4>
                            This is what your course will look like to your users
                        </h4>
                    </header>
                    <section className="w-full h-full bg-white shadow-xl rounded">
                        <section className="w-full h-10 bg-slate-400 rounded-t">

                        </section>
                        <section className="flex flex-col items-center bg-blue-400 justify-center text-sm text-white p-4 font-normal text-center h-fit shadow-md">
                            <h1 className="block w-[60%] text-[0.8rem] leading-4 min-h-[1rem]">{title == "" ? "Your Course Name e.g. Full Stack Developer Course 2023" : title}</h1>
                            <h2 className="block w-[75%] text-[0.7rem] leading-4 mt-[0.1rem] min-h-[1.5rem]">{description == "" ? "Describe your course so users can better understand it e.g. full guide to becoming a full stack developer in 2023" : description}</h2>
                            <button className="bg-white w-16 rounded h-6 mt-2">
                                {'               i                  '}
                            </button>
                        </section>
                    </section>
                </div>
            </section>
           
       </main>
    )
}
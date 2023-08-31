import { PiSelectionAll } from "react-icons/pi";
import { useGetCoursesQuery } from "../../app/apiSlices/courseSlices";
import { CourseLine} from "./CourseLine";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom"
// import { useEffect } from "react";
// import { useState } from "react";

export const CoursesList = ({token}) =>{
    let {data, isLoading, error} = useGetCoursesQuery(token);
    console.log(data)
    // console.log(data)
    return(
      <main className="w-full h-full p-3 font-noirpro">
            <header className="flex flex-col">
                <h2>
                    Welcome back, Onome
                </h2>
               
            </header>
            <section className="flex flex-row justify-between items-center py-2">
                <h3>
                    Your courses
                </h3>
                <Link to={`/courses/createnew/`}>
                    <button className="flex flex-row justify-around items-center  bg-blue-600  text-sm h-8 cursor-pointer w-28 p-2 font-noirpro rounded-lg text-white border-[1px] ">
                        Create New
                        <MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>
                    </button>
                </Link>
            </section>
            <div className="flex flex-row ">
                <input type="search" placeholder="Search your courses here" className="w-full rounded-md px-2 text-sm shadow-md h-10"></input>
               
            </div>
            <section className="mt-6">
                {
                    data?.map((x) => <CourseLine key={x.id} sn={x.id} courseName={x.title} courseDiscount={x.discount_percentage} coursePrice={x.price}></CourseLine>)
                }
            </section>
      </main>
    )
}
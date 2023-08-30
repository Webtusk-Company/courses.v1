import { useGetCoursesQuery } from "../app/apiSlices/courseSlices"

export const Courses = () =>{
    const { data } = useGetCoursesQuery()
    console.log(data)
    return (
       <main className="w-full h-full p-3">

       </main>
    )
}
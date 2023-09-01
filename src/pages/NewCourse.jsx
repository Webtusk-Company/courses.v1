
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../app/dataSlices/courseCreationSlice";
import { useState, useEffect, useRef } from "react";
import { Button } from "../assets/components/Kobobutton";
import { Link } from "react-router-dom"
import { useCreateNewCourseMutation} from "../app/apiSlices/createCourseSlice";
import { Currencies } from "../assets/neededfiles/myownneededcurrency"
export const NewCourse = () =>{
    const defaultCourse = useSelector((state)=> state.courseCreation);
    const dispatch = useDispatch();
    const title = useSelector((state) => state.courseCreation.title);
    const description = useSelector((state) => state.courseCreation.description);
    const onetime_payment = useSelector((state) => state.courseCreation.onetime_payment);
    const recurring_payment = useSelector((state) => state.courseCreation.recurring_payment);
    // const ref = useRef();
    const [formNumber, setFormNumber] = useState(1);
    const [activePaymentBlock, setAPB] = useState("w-[40%] shadow-lg bg-gray-900 text-white flex flex-row items-center justify-center border-gray-400 border-[1px] h-32 rounded" )

    const token = useSelector(state => state.token);
    console.log(token)
    const [ createCourse, result ] = useCreateNewCourseMutation();
    

   const setFormNext = () =>{
        setFormNumber(formNumber + 1)
   };
   
   const setFormBack = () =>{
        setFormNumber(formNumber - 1 )
   };
    const [numberOfTime, setNumberOfTime] = useState(0);
    const [ time, setTime] = useState("");
    const setCourse = (type, value, tobj) =>{
        let newObj = {...tobj};
        newObj[type] = value;
     
        dispatch(updateCourse(newObj));
        // setDefaultCourse();
    };
   
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
                <form onSubmit = {(e) => e.preventDefault()} className="w-[55%]">
                    {
                        formNumber == 1 && (
                        <div className="w-[100%] flex flex-col p-1 ml-3 mr-8">
                            <div className="w-full flex flex-col">
                                <label htmlFor="Course Title">Course Title</label>
                                <input onChange={(e) => setCourse("title", e.target.value, defaultCourse)}  type="text" className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                </input>
                            </div>
                            <div className="w-full flex flex-col mt-2">
                                <label htmlFor="Course Description">Course Description</label>
                                <textarea rows={3} cols={5} onChange={(e) => setCourse("description", e.target.value, defaultCourse)} className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                </textarea>
                            </div>
                        </div> 
                        )
                        ||
                        formNumber == 2 && (
                            <div className="w-[100%] flex flex-col p-1 ml-3 mr-8">
                                <div className="w-full flex flex-col">
                                    <label htmlFor="Course Vendor">Course Vendor</label>
                                    <input 
                                    onChange={(e) => setCourse("vendor", e.target.value, defaultCourse)}  
                                    type="text" className="focus:outline-none mt-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                    </input>
                                </div>
                                <div className="w-full flex flex-col mt-2">
                                    <label htmlFor="Course Duration">Course Duration</label>
                                    <div className="flex flex-row">
                                        <select onChange={(e) => setNumberOfTime(e.target.value)} name="--Please Select--" className="focus:outline-none mt-2 mr-3 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                            <option value="Days">
                                                Days
                                            </option>
                                            <option value="Weeks">
                                                Weeks
                                            </option>
                                            <option value="Months">
                                                Months
                                            </option>
                                            <option value="Years">
                                                Years
                                            </option>
                                        </select>
                                       <input onChange={(e) => setTime(e.target.value)} type="number" min={"1"} max={"1000"} className="focus:outline-none mt-2 mr-2 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                       </input>
                                        <input type="text" value={`${time} ${numberOfTime}`}  className="focus:outline-none mt-2 border-[0px] py-2 px-2 border-gray-200 rounded-md">
                                        </input>
                                    </div>
                                </div>
                            </div> 
                        )
                        ||
                        formNumber == 3 && (
                            <section>
                                <header className="w-[100%] flex flex-col p-1 ml-3 mr-8">
                                    Set Payment Type
                                </header>
                                <div className="w-full flex flex-row p-4 justify-around h-fit">
                                    <button onClick={() => {
                                        setCourse("recurring_payment", false, defaultCourse);
                                        setCourse("onetime_payment", true, defaultCourse);
                                        }} className={ onetime_payment ? activePaymentBlock : "w-[40%] flex flex-row items-center justify-center border-gray-400 border-[1px] h-32 rounded"}>
                                        One-time payment
                                    </button>
                                    <button onClick={() =>{
                                        setCourse("onetime_payment", true, defaultCourse);
                                        setCourse("recurring_payment", false, defaultCourse);
                                    }} className={ recurring_payment ? activePaymentBlock : "w-[40%] flex flex-row items-center justify-center border-gray-400 border-[1px] h-32 rounded" }>
                                        Recurring Payment
                                    </button>
                                </div>
                                <section>
                                    <header>
                                        <h2>Price</h2>
                                    </header>
                                    <article>
                                        <select className="focus:outline-none mt-2 mr-3 border-[1px] py-2 px-2 border-gray-200 rounded-md">
                                            {
                                                Currencies?.map((x,y) => <option value={x} key={y}>{x.symbol} {x.name}</option>)
                                            }
                                        </select>
                                        <input type="number" name="Price" id="price" onChange={(e) => setCourse("price", e.target.value, defaultCourse)}/>
                                    </article>
                                </section>
                            </section>
                           
                        )
                        ||
                        formNumber == 4 && (
                            <>
                            <h2>For files and images</h2>
                            </>
                        ) 
                    }
                    <div className="flex flex-row justify-end mt-3">
                        { formNumber > 1 &&
                           <Button text={"text-gray-900"} fn={setFormBack} >
                                Back
                            </Button>
                        }
                        <Button fn={formNumber == 4 ? () => createCourse({defaultCourse,token})  : () => setFormNext() } color="bg-gray-900 align-end ml-auto">
                            {formNumber == 4 ? "Submit" : "Next"}
                        </Button>
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
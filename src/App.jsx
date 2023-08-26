import { useState } from 'react'
import Webtusk from "./assets/logo.svg"
import { Link, Outlet, NavLink } from 'react-router-dom';
import { RiHome2Fill } from './assets/logos/Home';
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-[100vw] h-[100vh] absolute'>
        <header className='px-8 h-[10vh] bg-white border-b-[2px] '>
          <nav className='flex flex-row h-full items-center p-[1rem]'>
            <span className='w-32 h-full flex flex-col justify-center items-center align-middle'>
               <img src={Webtusk}>
               </img>
            </span>
          </nav>
        </header>
        <main className='flex flex-row'>
          <aside className='w-[25%] h-[90vh] bg-white pt-10'>
            <nav className={"flex flex-col font-noirpro pl-1 mr-10"}>
              <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive' } to="/dashboard">
                <RiHome2Fill></RiHome2Fill> 
                <span className='ml-2'>
                  All Courses 
                </span>
              </NavLink>
              <NavLink className={({isActive, isPending}) => isActive ? 'active': 'nonactive'} to="/courses">
                <RiHome2Fill></RiHome2Fill>
                <span className='ml-2'>
                  Courses
                </span>
              </NavLink>
            </nav>  
          </aside>
          <main className='w-[75%] h-[90vh] bg-[#efefef]'>
            <Outlet></Outlet>
          </main>
        </main>
       
      </main>
    </>
  )
}



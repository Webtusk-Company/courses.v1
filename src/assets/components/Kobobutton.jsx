export const Button = ({icon, children, color, fn, val, text}) =>{
    return (
        <button onClick={() => fn(val)} className={`flex flex-row justify-around items-center  ${ color }  text-sm h-8 cursor-pointer w-28 p-2 font-noirpro rounded-lg ${ text ? text : `text-white`} border-[1px]`}>
            {children}
            {icon ? icon : ""}
        </button>
    )
}
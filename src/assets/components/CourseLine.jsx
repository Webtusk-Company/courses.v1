export const CourseLine = ({courseName, sn, courseDiscount, coursePrice}) =>{
    return (
        <div className="w-full shadow-md font-noirpro h-10 flex flex-row items-center justify-between bg-white rounded-md p-2">
            <span>
                {sn}
            </span>
            <span>
                {courseName}
            </span>
            <span>
                {courseDiscount}
            </span>
            <span>
                {coursePrice}
            </span>
        </div>
    )
}
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"


export function CourseListTile({ course, id }) {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }


    return <div ref={setNodeRef} {...attributes} {...listeners} style={style} id={id} className="flex justify-between bg-slate-50 shadow-md  rounded-lg hover:cursor-pointer active:cursor-grabbing ">
        <ComponentLeft course={course} />
        <ComponentRight course={course} />
    </div>
}

function ComponentLeft(props) {
    return <div className="flex items-center">
        <div className="p-2">
            <svg width="20px" height="64px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#7F7F7F"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 2a2 2 0 10.001 4.001A2 2 0 007 2zm0 6a2 2 0 10.001 4.001A2 2 0 007 8zm0 6a2 2 0 10.001 4.001A2 2 0 007 14zm6-8a2 2 0 10-.001-4.001A2 2 0 0013 6zm0 2a2 2 0 10.001 4.001A2 2 0 0013 8zm0 6a2 2 0 10.001 4.001A2 2 0 0013 14z" fill="#5C5F62"></path></g></svg>
        </div>
        <img src={props.course.img} alt="" className="object-cover w-20 h-15 rounded-md" />
        <p className="pl-5 font-medium text-sm">{props.course.title}</p>
    </div>
}

function ComponentRight(props) {
    return <div className="flex justify-normal items-center">
        <div className="px-4">{props.course.price}</div>
        <div className="bg-bg-green px-2  mr-4 rounded-md border-2 border-green-700">
            <p>{props.course.type}</p>
        </div>
        <div className="pr-4">
            <svg width="20px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="menu-kebab"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C13.2426 2.75 14.25 3.75736 14.25 5C14.25 6.24264 13.2426 7.25 12 7.25C10.7574 7.25 9.75 6.24264 9.75 5C9.75 3.75736 10.7574 2.75 12 2.75Z" fill="#000000"></path> <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75Z" fill="#000000"></path> <path id="vector (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd" d="M12 16.75C13.2426 16.75 14.25 17.7574 14.25 19C14.25 20.2426 13.2426 21.25 12 21.25C10.7574 21.25 9.75 20.2426 9.75 19C9.75 17.7574 10.7574 16.75 12 16.75Z" fill="#000000"></path> </g> </g> </g></svg>
        </div>
    </div>
}






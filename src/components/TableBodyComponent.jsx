
export function TableBodyComponent({ courses, filterByName }) {
    return <>
        {courses.filter((c) => {
            return c.title.toLowerCase().includes(filterByName);
        }).map((val) => {
            const { img, title, startDate, endDate, price, days, status } = val;
            return <tr>
                <td className="px-2 py-4">
                    <div className="flex items-center">
                        <img className="w-25 h-20 rounded-md" src={img} alt="CourseImg" />
                        <p className="pl-2"> {title}</p>
                    </div>
                </td>
                <td className="px-2 py-4">{endDate}</td>
                <td className="px-2 py-4">{startDate}</td>
                <td className="px-2 py-4">{price}</td>
                <td className="px-2 py-4">{days}</td>
                <td className="px-2 py-4">
                    <PublishedComponent status={status} />
                </td>
            </tr>

        })}
    </>
}

function PublishedComponent({ status }) {
    return <div className={`${(status == 'Published') ? "bg-bg-green border-green-700" : "bg-slate-100 border-slate-300"}  py-1 rounded-lg border-2`}>
        {status}
    </div>
}
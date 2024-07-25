import { useState } from "react";
import { SecondaryHeading, TaglineHeading } from "./HeadingComponent";
import { RedirectComponent } from "./RidirectComponent";
import { TableBodyComponent } from "./TableBodyComponent";

export function BatchesMidComponents() {

    const [course, setCourse] = useState([
        {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__",
            title: 'SQL Basics To Advanced Mastery Course',
            startDate: "20 Jul 2024",
            endDate: '28 Jul 2024',
            price: '₹ 0',
            days: '180 days',
            status: 'Published'
        },
        {
            id: 2,
            img: "https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__",
            title: '30 Days Of Javascript Challenge',
            startDate: "24 Jul 2024",
            endDate: '28 Jul 2024',
            price: '₹ 1500',
            days: '30 days',
            status: 'Published'
        },
        {
            id: 3,
            img: "https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__",
            title: 'Interview Preparation With Javascript 2.0',
            startDate: "1 Aug 2024",
            endDate: '28 Aug 2024',
            price: '₹ 2000',
            days: '28 days',
            status: 'Unpublished'
        }
    ])

    const [filterCourse, setFilterCourse] = useState('')


    return (
        <div className="w-full p-4 flex justify-center items-end bg-bg-pink">
            <div className="w-[100%] h-[100%] bg-white shadow-xl rounded-lg flex flex-col justify-start items-start overflow-auto">
                <div className="flex flex-col items-start px-10 py-5 w-[100%]">
                    <SecondaryHeading label={"Batches"} />
                    <TaglineHeading
                        label={"Change orders of the products based on priority"}
                    />

                    {/* Search Compo */}
                    <div className="flex py-5">
                        <input type="text" placeholder="Search"
                            className="peer h-full w-[100%] rounded-md !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" onChange={(e) => {
                                setFilterCourse(e.target.value);
                            }} />
                        <button className="px-4 bg-app-purple mx-3 rounded-[4px] text-white">Search</button>
                    </div>

                    {/* table */}
                    <div className="w-[100%] h-[100%] border-slate-500">
                        <table className="w-full h-full">
                            <thead>
                                <tr>
                                    <th className="bg-slate-300 text-left px-8 py-4 rounded-tl-md">
                                        <p className="font-semibold">Title</p>
                                    </th>
                                    <th className="bg-slate-300 text-left px-8 py-4">
                                        <p className="font-semibold">Start Date</p>
                                    </th>
                                    <th className="bg-slate-300 text-left px-8 py-4">
                                        <p className="font-semibold">End Date</p>
                                    </th>
                                    <th className="bg-slate-300 text-left px-8 py-4">
                                        <p className="font-semibold">Price</p> </th>
                                    <th className="bg-slate-300 text-left px-8 py-4">
                                        <p className="font-semibold">Validity</p>
                                    </th>
                                    <th className="bg-slate-300 text-left px-8 py-4 rounded-tr-md">
                                        <p className="font-semibold">Status</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableBodyComponent courses={course} filterByName={filterCourse} />
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="w-20 h-20 mx-5">
                <RedirectComponent />
            </div>
        </div>
    )
}
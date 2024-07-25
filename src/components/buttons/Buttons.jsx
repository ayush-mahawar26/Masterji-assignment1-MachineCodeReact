
export function VerifyButton({label ,onTap , col }) {
    return <button onClick={onTap} type="button" className={`text-white w-[20em]   focus:outline-none rounded-md text-sm px-5 py-2.5 me-2 mb-2  p-4  hover:shadow-lg m-4 ${(col === 1) ? 'bg-green-500' : (col===2) ? 'bg-red-500' : 'bg-d-blue'}`}>{label}</button>
}
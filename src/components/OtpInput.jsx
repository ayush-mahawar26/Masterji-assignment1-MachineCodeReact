import { useEffect, useReducer, useRef, useState } from "react"
import { VerifyButton } from "./buttons/Buttons";
import { useNavigate } from "react-router-dom";
export function OtpInput({length , onOtpSubmit}){

    const [otp, setOtp] = useState(new Array(length).fill(""))
    const [col, setCol] = useState(0) ;
    const [buttonText , setButtonText] = useState("Verify Account")
    const inputRef = useRef([])
    const navigate = useNavigate() ;

    useEffect(()=>{
        for(var i =0 ; i < length ; i++) {
            if(otp[i] == ''){
                inputRef.current[i].focus()
                break
            }
        }
    })

    console.log(inputRef);

    function handleOnChange(index , event) {
        const value = event.target.value; 
        if(isNaN(value)) return 

        const newOtp = [...otp];
        // allow only one 
        newOtp[index] = value.substring(value.length-1).trim() ;
        setOtp(newOtp)

        const fullOtp = newOtp.join("")

        if(fullOtp.length === 4) {
            if(fullOtp === '1234') {
                setCol(1)
                setButtonText('Verified')
            }
            else{
                setCol(2) 
                setButtonText('Verification Failed')
            }
        }else{
            setCol(0)
            setButtonText('Verify Account')
        }
    }

    function handleClick() {

    }

    function handleKeyDown() {

    }

    return <div>
        <div className="flex justify-center my-2">
            {otp.map((val , index) => {
                return <input
                className={`mt-1 block w-[40px] h-[40px] font-[2em] px-3 py-2 mx-2 bg-[#DBE2EF] border border-[#DBE2EF] rounded-md text-sm shadow-sm placeholder-slate-400 text-center focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${(col===0) ? 'border-none' : (col === 1) ? 'border-green-500 border-90' : 'border-red-500 border-90'}`}
                    key={index} 
                    ref={(input)=>{
                        inputRef.current[index] = input
                    }}
                    type="text"
                    value={val}
                    onChange={(e)=>handleOnChange(index , e)}
                    onClick={()=>handleClick(index)}
                    onKeyDown={(e) =>handleKeyDown(index, e)}
                />
            })}
        </div>
        <div>
            <VerifyButton label={buttonText} col={col} onTap={() =>{
                if(col == 1) {
                    navigate('/course-list')
                }
            }}/>
        </div>
    </div>


   
}
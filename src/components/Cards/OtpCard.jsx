
import { SecondaryHeading, TaglineHeading } from "../HeadingComponent";
import { OtpInput } from "../OtpInput";


export function OtpCard(){
    return <div className="w-[40%] rounded-lg m-5 flex flex-col bg-white shadow-lg items-center p-5">
        <SecondaryHeading label={"Mobile Phone Verification"}/>
        <div className="w-[70%] justify-center text-center">
            <TaglineHeading label={"Enter the 4-digit verification code that was sent to your phone number."}/>
        </div>
        <OtpInput length={4} onOtpSubmit={()=>{
            console.log("Submitted");
        }}/>

        <div className="flex justify-center items-center">
            <TaglineHeading label={"Didn't recieve the code?"}/>
            <p className="text-d-blue hover:cursor-pointer">Resend</p>
        </div>
        
    </div>
}
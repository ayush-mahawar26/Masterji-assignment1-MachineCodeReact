import { VerifyButton } from "../components/buttons/Buttons";
import { OtpCard } from "../components/Cards/OtpCard";
import {  PrimaryWhiteHeading } from "../components/HeadingComponent";
import { RedirectComponent } from "../components/RidirectComponent";

export function OtpFormPage() {
    return <div  className="flex flex-col bg-bg-blue w-screen h-screen justify-between">
        <div className="bg-bg-blue flex flex-col justify-center items-center">
                <div className="justify-center mt-10">
                    <PrimaryWhiteHeading label={"Chai aur Code"}/>
                </div>
                <OtpCard/>
            </div>

        <div className="bg-bg-blue flex flex-row justify-end">
            <div className={`w-[5em] h-[5em] rounded-lg mr-5 mb-5 hover:cursor-pointer`}>
                <RedirectComponent/>
            </div>
        </div>
    </div>
}
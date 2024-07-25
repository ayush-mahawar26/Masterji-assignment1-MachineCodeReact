import { BatchesMidComponents } from "../components/BatchesMidCompo";
import { PrimaryBlueHeading } from "../components/HeadingComponent";

export function BatchPage() {
    return <div className="w-screen h-screen bg-bg-pink">
        <div className="w-screen h-screen flex flex-col items-center p-10 text-center">
            <PrimaryBlueHeading label={"Chai aur Code"} />
            <BatchesMidComponents />
        </div>

    </div>
}
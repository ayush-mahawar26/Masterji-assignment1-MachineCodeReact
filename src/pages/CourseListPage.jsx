import { CourseMidComponent } from "../components/CourseMidComponent";
import { PrimaryBlackHeading, SecondaryHeading, TaglineHeading } from "../components/HeadingComponent";
import { RedirectComponent } from "../components/RidirectComponent";

export function CourseListPage() {
    return <div className="w-screen h-screen bg-bg-green">
        <div className="w-screen h-screen flex flex-col items-center p-10 text-center">
            <PrimaryBlackHeading label={"Chai aur Code"} />
            <CourseMidComponent />
        </div>

    </div>
}
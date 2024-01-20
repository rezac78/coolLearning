import { Course } from "@/types/auth";
interface LeftSideProps {
        Label: string;
        color: string;
        icon: string;
        idPart: any;
        initialCourseData: Course[];
        Chapters: any;
}
export default function LeftSide(props: LeftSideProps) {
        return (
                <>
                        <div className="flex items-center mb-2 text-light-color-Font dark:text-dark-color-Font">
                                <div className={`h-5 w-5 mr-2 ${props.color}`}><props.icon /></div>
                                <span>{props.Label} {props.Label === "Chapters:" ? props.Chapters[props.idPart] : props.initialCourseData[props.idPart]}</span>
                        </div>
                </>
        )
}
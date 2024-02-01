import { UserIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

interface HeaderPageProps {
        HeadTitle: string;
        NameTeach: string;
        DataCreate: string;
}
export default function HeaderPage(props: HeaderPageProps) {
        return (
                <>
                        <h2 className="text-2xl sm:text-3xl text-light-color-Font dark:text-dark-color-Font font-bold text-center mb-6">{props.HeadTitle}</h2>
                        <div className="flex justify-center">
                                <UserIcon className="text-blue-300 mt-1" width={20} height={20} />
                                <p className="text-lg font-semibold text-light-color-Font dark:text-dark-color-Font px-1">{props.NameTeach}</p>
                                <CalendarDaysIcon className="text-blue-300 mt-1" width={20} height={20} />
                                <p className="text-gray-500 text-xl font-bold">{props.DataCreate.slice(0, 10)}</p>
                        </div>
                </>
        )
}
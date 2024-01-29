interface AlertProps {
        Message?: string;
        type?: boolean;
}
export default function Alerts(props: AlertProps) {
        return (
                <div className={`fixed top-20 left-2 z-50 p-4 ${props.type === true ? "bg-green-100 text-green-700 border border-green-600" : props.type === false ? "bg-red-100 text-red-700 border border-red-600" : "bg-yellow-100 text-yellow-700 border border-yellow-600"} rounded-md`}>
                        {props.Message}
                </div>
        )
}

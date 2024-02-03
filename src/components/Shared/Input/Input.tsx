interface InputProps {
        IdName: string;
        LabelName: string;
        type: string;
        Register: any;
        Errors: any;
        Type: string;
        index?: number;
        value?: string;
}
export default function Inputs(props: InputProps) {
        const uniqueId = props.index !== undefined ? `${props.IdName}-${props.index}` : props.IdName;
        return (
                <div className="my-4">
                        <label htmlFor={uniqueId} className={props.Type === "validation" ? "block text-light-color-Input-label dark:text-dark-color-Input-label text-sm font-bold mb-2" : "block text-sm font-medium text-gray-700"}>{props.LabelName}</label>
                        {props.type === "textarea" ? (
                                <>
                                        <p className="mt-2 text-xs text-yellow-600">{`!!After each dot, it goes to the next lineYou. can put your codes inside <code><code/>.Anything between these two [] will be deleted`}</p>
                                        <textarea {...props.Register(props.IdName)} id={uniqueId} className="w-full p-2 border rounded text-dark-gray" rows={8}></textarea>
                                </>
                        ) : props.Type === "Form" ? (
                                <input {...props.Register(props.IdName)} id={uniqueId} type={props.type} className="mt-1 block w-full text-dark-gray rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        ) : props.Type === "validation" ? (
                                <input type={props.type} value={props.value} id={uniqueId} {...props.Register(props.IdName)} className="shadow appearance-none border rounded w-full py-2 px-3 text-dark-gray bg-light-bg-Input dark:bg-dark-bg-Input leading-tight focus:outline-none focus:shadow-outline" />
                        ) : (
                                <input {...props.Register(`chapters.${props.index}.${props.IdName}`)} id={uniqueId} type={props.type} className="w-full p-2 border rounded text-dark-gray" />
                        )}
                        {props.Errors[props.IdName] && <p className="mt-2 text-sm text-red-600">{props.Errors[props.IdName]?.message}</p>}
                </div>
        )
}
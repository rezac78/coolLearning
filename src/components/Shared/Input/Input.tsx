interface InputProps {
        IdName: string;
        LabelName: string;
        type: string;
        Register: any;
        Errors: any;
        Ekey: number;
        Type: string;
        index?: number;
}
export default function Inputs(props: InputProps) {
        return (
                <>
                        {props.Type === "validation" ? <div key={props.Ekey} className="mb-4">
                                <label htmlFor={props.IdName} className="block text-light-color-Input-label dark:text-dark-color-Input-label text-sm font-bold mb-2">{props.LabelName}</label>
                                <input type={props.type} id={props.IdName} {...props.Register(props.IdName)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-light-bg-Input dark:bg-dark-bg-Input leading-tight focus:outline-none focus:shadow-outline" />
                                {props.Errors[props.IdName] && <p className="text-red-500 text-xs italic">{props.Errors[props.IdName]?.message}</p>}
                        </div> :
                                <div className="flex-1 p-4 shadow rounded-lg">
                                        <label htmlFor={props.IdName} className="block text-sm font-medium text-gray-700">{props.LabelName}</label>
                                        {props.Type === "Form" ?
                                                <input {...props.Register(props.IdName)} id={props.IdName} type={props.type} className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                                :
                                                <input {...props.Register(`chapters.${props.index}.${props.IdName}`)} id={props.IdName} type={props.type} className="w-full p-2 border rounded" />
                                        }
                                        {props.Errors[props.IdName] && <p className="mt-2 text-sm text-red-600">{props.Errors[props.IdName]?.message}</p>}
                                </div>
                        }
                </>
        )
}

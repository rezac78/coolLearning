import { UseFormRegister } from 'react-hook-form';
interface InputProps {
        IdName: string;
        LabelName: string;
        type: string;
        Register: any;
        Errors: any;
        Ekey: number;
}
export default function Inputs(props: InputProps) {
        return (
                <div key={props.Ekey} className="mb-4">
                        <label htmlFor={props.IdName} className="block text-light-color-Input-label dark:text-dark-color-Input-label text-sm font-bold mb-2">{props.LabelName}</label>
                        <input type={props.type} id={props.IdName} {...props.Register(props.IdName)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-light-bg-Input dark:bg-dark-bg-Input leading-tight focus:outline-none focus:shadow-outline" />
                        {props.Errors[props.IdName] && <p className="text-red-500 text-xs italic">{props.Errors[props.IdName]?.message}</p>}
                </div>
        )
}

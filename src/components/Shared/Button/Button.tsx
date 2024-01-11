interface ButtonProps {
        Title: string;
        className: string;
}
export default function Button(props: ButtonProps) {
        return (
                <button className={props.className}>
                        {props.Title}
                </button>
        )
}

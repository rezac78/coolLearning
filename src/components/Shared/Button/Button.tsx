interface ButtonProps {
        Title?: string;
        className?: string;
        children?: React.ReactNode;
        Type: string;
        Click?: () => void;
}
export default function Button(props: ButtonProps) {
        return (
                <button className={props.className} onClick={props.Click}>
                        {props.Type === "child" ? props.children : props.Title}
                </button>
        )
}

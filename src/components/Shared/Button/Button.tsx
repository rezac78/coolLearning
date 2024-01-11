interface ButtonProps {
        Title: string;
        className: string;
}
export default function Button(props: ButtonProps) {
        return (
                <button className={`bg-bg-button hover:bg-bg-button-hover text-dark-color-Font ${props.className}`}>
                        {props.Title}
                </button>
        )
}

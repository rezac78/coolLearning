import Link from 'next/link';
interface LinkProps {
        Href: string;
        className?: string;
        Title?: string;
        type: string;
        children?: React.ReactNode;
}
export default function Links(props: LinkProps) {
        return (
                <Link className={props.className} href={props.Href}>
                        {props.type === "icon" ? props.children : props.Title}
                </Link>
        )
}

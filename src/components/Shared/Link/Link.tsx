import Link from 'next/link';
interface LinkProps {
        Href: string;
        className?: string;
        Title?: string;
        type: string;
        children?: React.ReactNode;
        target?: string;
}
export default function Links(props: LinkProps) {
        return (
                <Link target={props.target ? "_blank" : undefined} className={props.className} href={props.Href}>
                        {props.type === "icon" ? props.children : props.Title}
                </Link>
        )
}

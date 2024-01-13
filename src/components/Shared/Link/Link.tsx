import Link from 'next/link';
interface LinkProps {
        Href: string;
        className: string;
        Title: string;
}
export default function Links(props: LinkProps) {
        return (
                <Link className={props.className} href={props.Href}>
                        {props.Title}
                </Link>
        )
}

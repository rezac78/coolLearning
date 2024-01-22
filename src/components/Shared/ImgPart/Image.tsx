import Image from 'next/image';
import cl from '../../../../cloudinaryConfig';
interface ImageProps {
        Src: string;
        width: number;
        height: number;
        className: string;
}
export default function ImagePart(props: ImageProps) {
        return (
                <Image
                        src={props.Src}
                        alt="Not Found"
                        width={props.width}
                        height={props.height}
                        className={`${props.className} object-cover`}
                />
        )
}

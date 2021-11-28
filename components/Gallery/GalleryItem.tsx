import Image from "next/image";
import styles from "./GalleryItem.module.scss";

interface Props {
    readonly src: StaticImageData
    readonly title: string
}

export const GalleryItem = ({ src, title }: Props) => {
    return (
        <li className={styles.item}>
            <Image src={src} alt={title} />
        </li>
    )
}
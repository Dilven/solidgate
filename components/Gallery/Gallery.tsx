import { GalleryItem } from "./GalleryItem"
import styles from "./Gallery.module.scss";

interface Props {
    readonly images: { src: StaticImageData, title: string }[]
}

export const Gallery = ({ images }: Props) => {
    return (
        <ul className={styles.list}>
            {images.map(({ title, src }) => (
                <GalleryItem key={title} title={title} src={src} />
            ))}
        </ul>
    )
}
import styles from './ImageContainer.module.scss'
import Image from 'next/image';

interface ImageContainerProps {
    imageUrl: string;
    altText: string;
    imageLabel: string;
}

const ImageContainer = (props: ImageContainerProps) => {
    return (
        <div className={styles.container}>
            <Image src={props.imageUrl} alt={props.altText} />
            <div className={styles.imageOverlay}></div>
            <p className={`label-sans-light`}>{props.imageLabel}</p>
        </div>
    )
}

export default ImageContainer;
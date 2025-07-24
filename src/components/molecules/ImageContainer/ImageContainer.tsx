import styles from './ImageContainer.module.scss'

type ImageContainerProps = {
    imageUrl: string;
    altText: string;
    imageLabel: string;
}

const ImageContainer = (props: ImageContainerProps) => {
    return (
        <div className={styles.container}>
            <img src={props.imageUrl} alt={props.altText} />
            <div className={styles.imageOverlay}></div>
            <p className={`label-sans-light`}>{props.imageLabel}</p>
        </div>
    )
}

export default ImageContainer;
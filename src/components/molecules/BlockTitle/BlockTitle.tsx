import styles from './BlockTitle.module.scss'
import InfoIcon from '@/components/atoms/Icon/InfoIcon'

type BlockTitleProps = {
    text: string;
    iconVisible: boolean;
}

const BlockTitle = (props: BlockTitleProps) => {
    return (
        <div className={`${styles.container} ${props.iconVisible ? styles.visible : ''}`}>
            <h3 className={`${styles.content} title-sans-regular`}>{props.text}</h3>
            <InfoIcon />
        </div>
    )
}

export default BlockTitle;
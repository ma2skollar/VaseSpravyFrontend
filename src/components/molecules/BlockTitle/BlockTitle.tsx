import styles from './BlockTitle.module.scss'
import InfoIcon from '@/components/atoms/Icon/Material/InfoIcon'

interface BlockTitleProps {
    text: string;
    iconVisible: boolean;
}

const BlockTitle = (props: BlockTitleProps) => {
    return (
        <div className={styles.container}>
            <h3 className={`${styles.content} title-sans-regular`}>{props.text}</h3>
            {props.iconVisible && <InfoIcon />}
        </div>
    )
}

export default BlockTitle;
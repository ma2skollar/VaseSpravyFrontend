import MailIcon from '@/components/atoms/Icon/Material/MailIcon';
import styles from './MailInfoContainer.module.scss';

interface MailInfoContainerProps {
    title: string;
    description: string;
    email: string;
}

const MailInfoContainer = (props: MailInfoContainerProps) => {
    return (
        <a className={styles.container} href={`mailto:${props.email}`}>
            <MailIcon />
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <h2 className='title-sans-small'>{props.title}</h2>
                    <p className='subtitle-sans-light'>{props.description}</p>
                </div>
                <p className="label-sans-large">
                    {props.email}
                </p>
            </div>
        </a>
    )
}

export default MailInfoContainer;
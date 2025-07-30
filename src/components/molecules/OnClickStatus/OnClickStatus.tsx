import ErrorCircleIcon from '@/components/atoms/Icon/Material/ErrorCircleIcon';
import styles from './OnClickStatus.module.scss';
import CheckCircleIcon from '@/components/atoms/Icon/Material/CheckCircleIcon';

interface OnClickStatusProps {
    success: boolean;
};

const OnClickStatus = (props: OnClickStatusProps) => {
    if (props.success) {
        return (
            <div className={`${styles.container} ${props.success ? styles.success : styles.error}`}>
                <CheckCircleIcon />
                <p className='label-sans-light'>
                    {'Zaslali sme Vám potvrdzovací e-mail. Nájdete v ňom inštrukcie ako potvrdiť svoj odber.'}
                </p>
            </div>
        )
    }
    else {
        return (
            <div className={`${styles.container} ${props.success ? styles.success : styles.error}`}>
                <ErrorCircleIcon />
                <p className='label-sans-light'>
                    {'Nepodarilo sa nam zaslať Vám potvrdzujúci e-mail. Skontrolujte, či ste zadali správnu e-mailovú adresu.'}
                </p>
            </div>
        )
    }
}

export default OnClickStatus;
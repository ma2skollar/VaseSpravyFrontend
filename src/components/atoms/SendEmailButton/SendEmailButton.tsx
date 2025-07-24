import styles from './SendEmailButton.module.scss';

type SendEmailButtonProps = {
    text: string;
    isDisabled: boolean;
    onClick?: () => void;
};

const SendEmailButton = (props: SendEmailButtonProps) => {
    return (
        <button
            className={`${styles.sendEmailButton} ${props.isDisabled ? styles.disabled : ''} link-text-sans-medium`}
            onClick={props.onClick}
            disabled={props.isDisabled}
        >
            {props.text}
        </button>
    );
}

export default SendEmailButton;
import styles from './SendEmailButton.module.scss';

interface SendEmailButtonProps {
    text: string;
    isDisabled: boolean;
    isDisabledText: string;
    onClick: () => void;
};

const SendEmailButton = (props: SendEmailButtonProps) => {
    return (
        <button
            className={`${styles.sendEmailButton} ${props.isDisabled ? styles.disabled : ''} link-text-sans-medium`}
            onClick={props.onClick}
            disabled={props.isDisabled}
        >
            {props.isDisabled ? props.isDisabledText : props.text}
        </button>
    );
}

export default SendEmailButton;
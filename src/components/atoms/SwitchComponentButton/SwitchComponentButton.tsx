import styles from './SwitchComponentButton.module.scss';
import BackgroundLogoInitials from '@/components/atoms/BackgroundLogoInitials/BackgroundLogoInitials';

export enum BiasMarkerType {
    Liberal = 'Liberálne',
    Center = 'Neutrálne',
    Conservative = 'Konzervatívne',
    Compare = 'Porovnanie'
}

interface SwitchComponentButtonProps {
    bias: BiasMarkerType;
    isSelected?: boolean;
    onClick?: () => void;
}

const SwitchComponentButton = (props: SwitchComponentButtonProps) => {
    return (
        <button
            className={`${styles.switchComponentButton} ${props.isSelected ? styles.selected : ''} ${styles[`switchComponentButton--${props.bias.charAt(0)}`]}`}
            onClick={props.onClick}
        >
            {props.bias.charAt(0) === 'P' ? (
                <BackgroundLogoInitials />
            ) : null}
            <span className={`${styles.content} label-sans-heavy`}>
                {props.isSelected ? props.bias : props.bias.charAt(0)}
            </span>
        </button>
    );
}

export default SwitchComponentButton;
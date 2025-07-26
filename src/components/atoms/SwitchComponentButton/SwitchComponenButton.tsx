import styles from './SwitchComponentButton.module.scss';
import BackgroundLogoInitials from '@/components/atoms/BackgroundLogoInitials/BackgroundLogoInitials';

export enum BiasMarkerType {
    Liberal = 'Liberálne',
    Center = 'Stred',
    Conservative = 'Konzervatívne',
    Special = 'Porovnanie'
}

type SwitchComponentButtonProps = {
    onClick?: () => void;
    bias: BiasMarkerType;
    isSelected?: boolean;
}

const SwitchComponentButton: React.FC<SwitchComponentButtonProps> = (props) => {
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
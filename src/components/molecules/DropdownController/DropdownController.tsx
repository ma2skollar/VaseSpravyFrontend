import ArrowDownIcon from '@/components/atoms/Icon/Material/ArrowDownIcon';
import styles from './DropdownController.module.scss';
import ArrowUpIcon from '@/components/atoms/Icon/Material/ArrowUpIcon';

type DropdownControllerProps = {
    label: string;
    active: boolean;
    onClick?: () => void;
}

const DropdownController = (props: DropdownControllerProps) => {
    return (
        <button className={styles.container} onClick={props.onClick}>
            <span className='text-sans-regular'>{props.label}</span>
            {props.active ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </button>
    )    
}

export default DropdownController;
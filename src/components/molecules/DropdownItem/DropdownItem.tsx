import CheckBoxCheckedIcon from '@/components/atoms/Icon/Material/CheckBoxChecked';
import styles from './DropdownItem.module.scss';
import CheckBoxIcon from '@/components/atoms/Icon/Material/CheckBoxIcon';

interface DropdownItemProps {
    label: string;
    selected: boolean;
    onClick?: () => void;
};

const DropdownItem = (props: DropdownItemProps) => {
    return (
        <button className={styles.container} onClick={props.onClick}>
            <span className='text-sans-regular'>{props.label}</span>
            {props.selected ? <CheckBoxCheckedIcon /> : <CheckBoxIcon />}
        </button>
    )
}

export default DropdownItem;
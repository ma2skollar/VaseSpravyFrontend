import OpenNewIcon from '@/components/atoms/Icon/Material/OpenNewIcon';
import styles from './SeachResultItem.module.scss';

type SearchResultItemProps = {
    category: string;
    href?: string;
    onClick?: () => void;
}

const SearchResultItem = (props: SearchResultItemProps) => {
    return (
        <a className={`${styles.container} link-text-sans-large`} href={props.href} onClick={props.onClick} target='_self'>
            {props.category}
            <OpenNewIcon />
        </a>
    )
}

export default SearchResultItem;
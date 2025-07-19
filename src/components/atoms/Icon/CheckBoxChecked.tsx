import styles from "./Icon.module.scss";

const CheckBoxCheckedIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
        <path d="M10.6 15.8538L17.323 9.13075L16.2693 8.077L10.6 13.7463L7.75 10.8962L6.69625 11.95L10.6 15.8538ZM5.30775 20.5C4.80258 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6922V5.30775C3.5 4.80258 3.675 4.375 4.025 4.025C4.375 3.675 4.80258 3.5 5.30775 3.5H18.6922C19.1974 3.5 19.625 3.675 19.975 4.025C20.325 4.375 20.5 4.80258 20.5 5.30775V18.6922C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6922 20.5H5.30775Z" fill="currentColor"/>
        </svg>
    )
}

export default CheckBoxCheckedIcon;
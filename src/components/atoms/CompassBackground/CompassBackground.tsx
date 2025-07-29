import styles from "./CompassBackground.module.scss";

interface CompassBackgroundProps {
    size: number;
}

const CompassBackground = (props: CompassBackgroundProps) => {
    return (
        <svg width={props.size} height={props.size} viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.compass}>
            <path d="M18.8711 20.249C18.8713 19.7776 19.2531 19.3957 19.7246 19.3955L104.604 19.3955L104.604 105.128L18.8711 105.128L18.8711 20.249Z" fill="#FA6661" stroke="#E06C68" stroke-width="0.8"/>
            <path d="M105.402 19.3955L190.281 19.3955C190.753 19.3958 191.135 19.7776 191.135 20.249L191.135 105.128L105.402 105.128L105.402 19.3955Z" fill="#8DBEFF" stroke="#90B4E4" stroke-width="0.8"/>
            <path d="M105.402 105.928L191.135 105.928L191.135 190.807C191.135 191.279 190.753 191.66 190.281 191.661L105.402 191.661L105.402 105.928Z" fill="#BE8EC8" stroke="#B884B1" stroke-width="0.8"/>
            <path d="M18.8711 190.807L18.8711 105.928L104.604 105.928L104.604 191.661L19.7246 191.661C19.2531 191.66 18.8713 191.279 18.8711 190.807Z" fill="#A5D38C" stroke="#96CD79" stroke-width="0.8"/>
            <rect x="199.973" y="105.131" width="0.791461" height="189.951" transform="rotate(90 199.973 105.131)" fill="currentColor"/>
            <rect x="104.604" y="10.0264" width="0.791461" height="189.951" fill="currentColor"/>
            <path d="M4.71671 105.529L7.69986 102.546L8.25586 103.102L5.82871 105.529L8.25586 107.956L7.69986 108.512L4.71671 105.529Z" fill="currentColor"/>
            <path d="M205.279 105.526L202.296 108.509L201.74 107.953L204.167 105.526L201.74 103.098L202.296 102.542L205.279 105.526Z" fill="currentColor"/>
            <path d="M105.003 4.72013L107.986 7.70328L107.43 8.25928L105.003 5.83213L102.576 8.25928L102.02 7.70328L105.003 4.72013Z" fill="currentColor"/>
            <path d="M104.997 205.277L102.014 202.294L102.57 201.738L104.997 204.165L107.424 201.738L107.98 202.294L104.997 205.277Z" fill="currentColor"/>
        </svg>
    )
}

export default CompassBackground;
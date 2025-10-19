import styles from "./CustomIcon.module.scss";
import Image from "next/image";

const DobreNovinyCustomIcon = () => {
	return (
		<div 
			className={`${styles.icon} ${styles.container}`} 
			style={{ 
				backgroundColor: "white",
			}}
		>
			<Image height={18.5} width={97} src="/DobreNovinyCustomIcon.png" alt="Dobre Noviny Logo"/>
		</div>
	);
};

export default DobreNovinyCustomIcon;

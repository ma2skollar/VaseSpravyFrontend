import styles from "./CustomIcon.module.scss";
import Image from "next/image";

const NovinySkCustomIcon = () => {
	return (
		<div 
			className={`${styles.icon} ${styles.container}`} 
			style={{ 
				backgroundColor: "white",
			}}
		>
			<Image height={18} width={80} src="/NovinyCustomIcon.png" alt="Noviny SK Logo"/>
		</div>
	);
};

export default NovinySkCustomIcon;

import styles from "./CustomIcon.module.scss";
import Image from "next/image";

const HospodarskeCustomIcon = () => {
	return (
		<div 
			className={`${styles.icon} ${styles.container}`} 
			style={{ 
				backgroundColor: "white",
			}}
		>
			<Image height={18} width={82} src="/HospodarskeNovinyCustomIcon.png" alt="Hospodarske Noviny Logo"/>
		</div>
	);
};

export default HospodarskeCustomIcon;

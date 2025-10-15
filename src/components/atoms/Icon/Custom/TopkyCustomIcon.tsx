import styles from "./CustomIcon.module.scss";
import Image from "next/image";

const TopkyCustomIcon = () => {
	return (
		<div 
			className={`${styles.icon} ${styles.container}`} 
			style={{ 
				backgroundColor: "white",
			}}
		>
			<Image height={18} width={58} src="/TopkyCustomIcon.png" alt="Topky Logo"/>
		</div>
	);
};

export default TopkyCustomIcon;

import styles from "./CustomIcon.module.scss";
import Image from "next/image";

const NewsSkCustomIcon = () => {
	return (
		<div 
			className={`${styles.icon} ${styles.container}`} 
			style={{ 
				backgroundColor: "white",
			}}
		>
			<Image height={18.5} width={97} src="/NewsSkCustomIcon.png" alt="News.sk Logo"/>
		</div>
	);
};

export default NewsSkCustomIcon;

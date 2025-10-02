export const getTimeDiff = (from: Date, to: Date) => {
	const diffMs = to.getTime() - from.getTime();
	const diffMinutes = Math.floor(diffMs / (1000 * 60));
	const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
	
	if (diffMinutes < 60) {
		return {
			ago: diffMinutes || 1,
			unit: diffMinutes === 1 ? "minútou" : "minútami",
		};
	} else if (diffHours < 24) {
		return {
			ago: diffHours,
			unit: diffHours === 1 ? "hodinou" : "hodinami",
		};
	} else {
		return {
			ago: diffDays,
			unit: diffDays === 1 ? "dňom" : "dňami",
		};
	}
};
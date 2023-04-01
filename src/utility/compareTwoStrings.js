function compareTwoStrings(str1, str2) {
	const searchTerm = str2.toLowerCase().replace(/[^\w\s]/gi, '');
	const regex = new RegExp(
		`\\b${searchTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\b`,
		'i'
	);
	return regex.test(str1.toLowerCase());
}

function levenshteinDistance(str1, str2) {
	const len1 = str1.length;
	const len2 = str2.length;
	const diff = [];

	for (let i = 0; i <= len1; i++) {
		diff[i] = [i];
	}

	for (let j = 0; j <= len2; j++) {
		diff[0][j] = j;
	}

	for (let i = 1; i <= len1; i++) {
		for (let j = 1; j <= len2; j++) {
			const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
			diff[i][j] = Math.min(
				diff[i - 1][j] + 1,
				diff[i][j - 1] + 1,
				diff[i - 1][j - 1] + cost
			);
		}
	}

	return diff[len1][len2];
}

function isSimilarString(str1, str2, threshold) {
	const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
	if (
		distance <= threshold ||
		str1.toLowerCase().includes(str2.toLowerCase())
	) {
		return true;
	} else return false;
}

export { levenshteinDistance, isSimilarString };

export default compareTwoStrings;



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

function isSimilarString(str1, str2) {
	let threshold = Math.floor(str1.common.length / 3);
	const distance = levenshteinDistance(
		str1.common.toLowerCase(),
		str2.toLowerCase()
	);
	if (
		distance <= threshold ||
		str1.official.toLowerCase().includes(str2.toLowerCase())
	) {
		return true;
	} else return false;
}

export { levenshteinDistance, isSimilarString };

// The levenshteinDistance function is the core of the algorithm. It calculates the distance between two strings. The distance is the number of operations needed to transform one string into the other. The operations are: insert, delete, and replace. The function returns the distance between the two strings.
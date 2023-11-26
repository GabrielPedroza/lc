// two pointers
const isPalindrome = (s) => {
	if (s.length < 2) return true

	let left = 0
	let right = s.length - 1

	while (left <= right) {
		if (!isAlphaNumeric(s[left])) {
			left++
			continue
		}
		if (!isAlphaNumeric(s[right])) {
			right--
			continue
		}

		if (s[left].toLowerCase() !== s[right].toLowerCase()) return false

		left++
		right--
	}

	return true
}

const isAlphaNumeric = (str) => {
	const _alphaNumeric = "1234567890abcdefghijklmnopqrstuvwxyz"

	return _alphaNumeric.includes(str) || _alphaNumeric.toUpperCase().includes(str);
}

// array -> string comparison
const isPalindrome = (s) => {
	const filteredStr = []

	for (const str of s) {
		if (isAlphaNumeric(str)) {
			filteredStr.push(str);
		}
	}

	return filteredStr.join("").toLowerCase() === filteredStr.reverse().join("").toLowerCase()
}

const isAlphaNumeric = (str) => {
	const _alphaNumeric = "1234567890abcdefghijklmnopqrstuvwxyz"

	return _alphaNumeric.includes(str) || _alphaNumeric.toUpperCase().includes(str);
}

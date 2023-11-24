const groupAnagrams = (strs) => {
	const storage = new Map()
	const output = []

	for (const str of strs) {
		const sortedStr = str.split("").sort().join("")
		if (storage.has(sortedStr)) {
			const arrayOfStrs = storage.get(sortedStr)
			arrayOfStrs.push(str)
			storage.set(sortedStr, arrayOfStrs)
		} else {
			storage.set(sortedStr, [str])
		}
	}

	for (const [index, value] of storage) {
		output.push(value)
	}

	return output
}

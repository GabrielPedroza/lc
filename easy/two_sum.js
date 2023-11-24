const twoSum = (nums, target) => {
	const storage = new Map()

	for (const [index, num] of Object.entries(nums) {
		const potentialNum = target - num
		if (storage.has(potentialNum)) {
			return [index, storage.get(potentialNum)]
		} else {
			storage.set(num, index)
		}
	}
	return []
}

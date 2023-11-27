let ArrayLength = 10
let MaxNumberToRandom = 20
let array = []

function merge(left, right){
	let arr = []
	while (left.length && right.length){
		if (left[0] < right[0]) {
			arr.push(left.shift())
		} else {
			arr.push(right.shift())
		}
	}
	return [...arr, ...left, ...right]
}

function mergeSort(array) {
	const half = array.length / 2

	if (array.length < 2){
		return array
	}
	const left = array.splice(0, half)
	return merge(mergeSort(left), mergeSort(array))
}

function RandomNumbersForArr(array) {
	for (let i = 0; i < ArrayLength; i++) {
		let r = Math.floor(Math.random() * MaxNumberToRandom)
		array.push(r)
	}
}
RandomNumbersForArr(array)
console.log(` Згенерований масив:`)
console.table(array)
console.log(` Відсортований масив:`)
console.table(mergeSort(array))

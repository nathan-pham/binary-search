const rand_int = (min=0, max=100) => (
  Math.floor(Math.random() * (max - min)) + min
)

const rand_array = (length=100, range=50) => (
  new Array(length)
    .fill(0)
    .map(() => rand_int(0, range))
    .sort((a, b) => a - b)
)

const r_binary_search = (data, item) => {
  let middle_index = Math.floor(data.length / 2)
  let middle_item = data[middle_index]

  if(data.length <= 1) {
    return false
  }

  if(middle_item == item) { 
    return true
  } else if(item > middle_item) {
    return r_binary_search(data.slice(middle_index, data.length), item)
  } else {
    return r_binary_search(data.slice(0, middle_index), item)
  }
}

const binary_search = (data, item) => {
  let first = 0
  let last = data.length - 1

  while(first <= last) {
    let middle = Math.floor((first + last) / 2)

    if(item == data[middle]) {
      return true
    } else if(item < data[middle]) {
      last = middle - 1
    } else {
      first = middle + 1
    }
  }

  return false
}

const trim_array = (array, length=10) => {
  let array_str = JSON.stringify(array.slice(0, length)).replace(/,/g, ", ")
  return `[${array_str.substring(1, array_str.length - 1)}, ...]`
}

const find = (method, array, item) => (
  method(array, item)
    ? `found ${item}` 
    : `could not find ${item}`
)

const select = (array) => (
  array[Math.floor(Math.random() * array.length)]
)

let array = rand_array()
console.log(`random array: ${trim_array(array, 50)}`)

console.log(find(r_binary_search, array, select(array)))
console.log(find(binary_search, array, select(array)))
function arraysMatch(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    let sortedA = [...a].sort((x, y) => x - y);
    let sortedB = [...b].sort((x, y) => x - y);

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];
console.log(arraysMatch(array1, array2)); // true

array1 = [1, 2, 2, 3];
array2 = [1, 2, 3, 3];
console.log(arraysMatch(array1, array2)); // false

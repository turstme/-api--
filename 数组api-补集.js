/* eslint-disable indent */
const arr1 = [1, 1, 2, 2, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
const arr3 = [0, 0, 1, 3, 4, 5, 6, 6, 7]
const arr4 = [1, 1, 2, 2, 2, 3, 4, 5]

// 求arr1在arr2中的补集c
const buji = (arr1, arr2) => {
    const c = [];
    for (let k of arr2) {
        if (arr1.indexOf(k, 0) === -1) {
            c.push(k);
        }
    }
    console.log(c)
}

buji(arr1, arr2)

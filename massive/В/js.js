
const array = [1,1,1,2,2,3,4,4,5,5,5,5].sort();
        const newArray = [];
        console.log(array);

        for (let i = 0; i < array.length; i++) {
            if (array[i] !== array[i - 1] && array[i] !== array[i + 1]) {
                newArray.push(array[i]);
            }
        }

        console.log(newArray);

console.log(solution(arr));
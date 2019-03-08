
function squareCube(array1, array2) {
    let sumSquare = 0;
    let sumCube = 0;
    array1.forEach(function (num){
        sumSquare += Math.pow(num, 2);
    });
    array2.forEach(function (num) {
        sumCube += Math.pow(num, 3);
    });
    if (sumSquare > sumCube) {
        return true;
    } else {
        return false;
    }
}

console.log(squareCube([1,2,3,4,100], [5,6,7,8]))
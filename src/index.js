exports.min = function min(array) {
    let minNumber = array && array.length > 0 ? array[0] : 0; 
    if (array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i] < minNumber) {
                minNumber = array[i];
            }
        }
    }
    return minNumber;
};

exports.max = function max(array) {
    let maxNumber = array && array.length > 0 ? array[0] : 0;
    if (array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maxNumber) {
                maxNumber = array[i];
            }
        }
    }
    return maxNumber;
};

exports.avg = function avg(array) {
    let avgNumber = 0;
    if (array && array.length) {
        for (let i = 0; i < array.length; i++) {
            avgNumber += array[i];
        }
        avgNumber /= array.length;
    }
    return avgNumber;
};

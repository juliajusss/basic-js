module.exports = function countCats(matrix) {
    let newCats = [];
    newCats = matrix.flat();
    let counter = 0;
    for (let i of newCats) {
        if (i === '^^') {
            counter = counter + 1;
        }
    }
    return counter;
};

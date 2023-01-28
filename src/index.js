module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    return matrix.reduce(
        (acc, elem, index) =>
            index % 2 !== 0 && index !== 0
                ? acc.concat(elem.reverse())
                : acc.concat(elem),
        []
    );
};

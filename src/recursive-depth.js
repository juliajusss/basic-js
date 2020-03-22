module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let depth = 1;

        for (let i = 0; i < arr.length; i++) {
            let arrayDepth = 1;
            if (Array.isArray(arr[i])) {
                arrayDepth += this.calculateDepth(arr[i]);
                depth = Math.max(arrayDepth, depth);

            }
        }
        return depth;
    }
};
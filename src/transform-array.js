module.exports =
    function transform(arr) {
        if (!Array.isArray(arr)) {
            throw "Error";
        }

        let sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === sequences[0]) {
                i++;
            } else if (arr[i] === sequences[1]) {
                result.pop();
            } else if (arr[i] === sequences[2]) {
                if (arr.length - 1 > i) {
                    result.push(arr[i + 1]);
                }
            } else if (arr[i] === sequences[3]) {
                if (i > 0) {
                    result.push(arr[i - 1]);
                }
            } else {
                result.push(arr[i]);
            }

        }

        return result;
    };


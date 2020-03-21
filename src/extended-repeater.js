module.exports =
    function repeater(str, options) {
        let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
        let separator = options.separator !== undefined ? options.separator : '+';
        let addition = options.addition !== undefined ? options.addition : '';
        let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
        let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

        let newStr = '';

        for (let i = 0; i < repeatTimes; i++) {
            if (i !== 0) {
                newStr += separator;
            }
            newStr += String(str);
            for (let k = 0; k < additionRepeatTimes; k++) {
                if (k !== 0) {
                    newStr += additionSeparator;
                }
                newStr += addition;
            }
        }

        return newStr;
    };



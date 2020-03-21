class VigenereCipheringMachine {

    constructor(direct) {
        this.direct = direct;
        if (direct === undefined) {
            this.direct = true;
        }
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw "Error!"
        }


        let result = '';
        message = message.toUpperCase();

        key = this.keyMaker(key, message);

        let alphabetArray = this.alphabet.split('');
        for (let i = 0; i < message.length; i++) {
            if (!(/[A-Z]/.test(message[i]))) {
                result += message[i];
            } else {
                let finalIndex = alphabetArray.indexOf(message[i]) + alphabetArray.indexOf(key[i]);
                if (finalIndex > 25) {
                    finalIndex = finalIndex - 26;
                }
                result += alphabetArray[finalIndex];
            }
        }
        if (this.direct) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }
    }

    decrypt(encryptedMessage, key) {

        let result = '';

        key = this.keyMaker(key, encryptedMessage);

        let alphabetArray = this.alphabet.split('');
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!(/[A-Z]/.test(encryptedMessage[i]))) {
                result += encryptedMessage[i];
            } else {
                let finalIndex = alphabetArray.indexOf(encryptedMessage[i]) - alphabetArray.indexOf(key[i]);
                if (finalIndex < 0) {
                    finalIndex = finalIndex + 26;
                }
                result += alphabetArray[finalIndex];
            }
        }

        if (this.direct) {
            return result;
        } else {
            return result.split('').reverse().join('');
        }

    }

    keyMaker(key, message) {
        key = key.toUpperCase();

        if (message.length > key.length) {
            key = key.repeat(message.length).split('');
            for (let i = 0; i < message.length; i++) {
                if (message[i] === ' ') {
                    key.splice(i, 0, ' ');
                }
            }
            key = key.join('').substring(0, message.length);
        }
        return key;
    }

}

module.exports = VigenereCipheringMachine;



const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    let v;
    if (value === null) {
      v = 'null';
    } else if ({}.toString.call(value) === '[object Function]') {
      v = 'function() {}';
    } else {
      v = value.toString();
    }
    this.array.push(v);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.array.length) {
      this.array = [];
      throw 'Error';
    }
    this.array.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let str = this.array.map((el) => `( ${el} )`).join('~~');
    this.array = [];
    return str;
  }
};

module.exports = chainMaker;



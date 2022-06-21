// Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), 
// false otherwise.

// It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

String.prototype.eightBitNumber = function() {
    let leng = this.length;
    if(leng > 1 && this[0] === '0' || leng === 0) return false;
    if(+this > 255 || +this < 0 || /\D/.test(this)) return false;
    return true;
  }
var _ = {
  clamp(number, lower, upper){
      var lowerClampedValue = Math.max(number, lower);
      var clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
  }, 
  inRange(number, start, end){
      if(end === undefined){
          end = start;
          start = 0;
      }; 
      if(start > end){
          let temp = end;
          end = start;
          start = temp;        
      };
      var isInRange = (number >= start) && (number < end);
      return isInRange;
  },
  words(string){
      var words = string.split(' ');
      return words;
  },
  pad(string, length){
      if(length <= string.length){
          return string;
      } else {
          var startPaddingLength = Math.floor((length - string.length)/2);
          var endPaddingLength = length - startPaddingLength - string.length;
          var space = ' ';
          var paddedString = space.repeat(startPaddingLength) + string + space.repeat(endPaddingLength);
          return paddedString;
      }
  },
  
};








// Do not write or modify code below this line.
module.exports = _;
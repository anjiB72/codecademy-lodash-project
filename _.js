var _ = {
    clamp(number, lower, upper) {
        var lowerClampedValue = Math.max(number, lower);
        var clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        };
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        };
        var isInRange = (number >= start) && (number < end);
        return isInRange;
    },
    words(string) {
        var words = string.split(' ');
        return words;
    },
    pad(string, length) {
        if (length <= string.length) {
            return string;
        } else {
            var startPaddingLength = Math.floor((length - string.length) / 2);
            var endPaddingLength = length - startPaddingLength - string.length;
            var space = ' ';
            var paddedString = space.repeat(startPaddingLength) + string + space.repeat(endPaddingLength);
            return paddedString;
        }
    },
    has(object, key){
        var hasValue = object[key];
        if (hasValue != undefined){
            return true;
        } return false;
    },
    invert(object){
        let invertedObject = {};
        for( key in object){
            var originalValue = object[key];
            invertedObject[originalValue] = key;            
        }
        return invertedObject;
    },
    findKey(object, predicate){
        for(key in object){
            var value = object[key];
            predicateReturnValue = predicate(value);
            if(predicateReturnValue === true){
                return key;
            } 
        return undefined;
        };
    },
    drop(array, n){
        if (n === undefined){
            n = 1;
        }
        var droppedArray = array.slice(n, array.length);
        return droppedArray;
    },
    
   

};







// Do not write or modify code below this line.
module.exports = _;
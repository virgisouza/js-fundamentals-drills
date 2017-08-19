/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2) 
  }
  return result
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var x = [1,3,3];
var y = [4,5,1];

var sumArrays =

function(x, y){
  var num1 = 0;
  var num2 = 0;
    for(var i = 0; i<x.length; i++){
    num1 += x[i]
  }
  for(var j = 0 ; j < y.length ; j++){
    num2 += y[j];
  }
  return num1 + num2;
 };
  


/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str){
  return str.length;
}


/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function(str){
  return str.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(x){
  var num1 = 0;
    for(var i = 0; i<x.length; i++){
    num1 += x[i]
  }
  return num1;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr){
  var x = [];
  for(var i = 0; i<arr.length; i++){
    x.push(arr[i].length);
  }
   return x;
}


/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(str){
  var x = [];
  for(var i = 0; i<str.length; i++){
    x.push(str[i].length);
  }
  var num1 = 0;
    for(var j = 0; j<x.length; j++){
    num1 += x[j]
  }
return num1;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj){
  var x = Object.values(obj);
  return x;
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize= function(obj){
  var x = Object.values(obj);
   return x.length;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(num){
   var x = [];
    var y = 0;
     for(var i= 0; i<num; i++){
       x.push( y *[i]);
     }
    return x
  }

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray= function(arr){
   arr.pop();
  return arr;
}
/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function (str){
  return str.split("");

}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(str){
  var x = str.pop();
    return x.length
  
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr){
  var z = 0;
  for(var i=0; i<arr.length; i++){
    //console.log(arr[i]);
    if(arr[i] <= 10){
     z += arr[i]
    }
  }
  return z;
}
/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */

var moreThanTenLetters= function(str){ 
  var amtElem = 0;
  for(var i = 0; i<str.length; i++){
     if(str[i].length > 10){
      amtElem += 1;
     }
  }
  return amtElem;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */

 var elem = [1,2,3,4,5];

var multiplyAll = function(arr){
 var quotient = arr.reduce(function(total, num){
   return total * num;
 })
  return quotient;
}

console.log(multiplyAll(elem))

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

var getKeys = function(obj){
  var arr = Object.keys(obj);
  return arr;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(str){
  var total = 0;
  for(var i = 0; i<str.length; i++){
    if(str[i] > 0){
       total +=  str[i];
}
  }
  return total;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */

var stringCountBelowThree = function(arr){
  var x = 0;
  for(var i = 0; i<arr.length; i++){
    if(arr[i].length <= 3){
      x+= 1;
    }
  }
  return x
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */


var countObjects = function(arr){
  for(var i = 0; i<arr.length; i++){
    
  }
  return i;
}


/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

var getObjectKeys = function(obj){
  var arr = Object.keys(obj);
  return arr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj){
  var arr = Object.values(obj);
  return arr
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */


var makeObject = function(str1, str2){
  
  var obj = new Object();
  obj[str1] = str2;
  return obj
  
}


/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */

var makeObjectReverse = function(value, key){
  var obj ={};
  obj[key] = value;
  return obj;
}


/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */

var tupleToObject = function(arr){
  var obj = {};
  for(var i = 0; i<arr.length; i++){
    var key = arr[0];
    var value = arr[1];
    obj[key] = value;
  }
  return obj;
}


/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr){
  var obj = {};
  for(var i = 0; i<arr.length; i++){
    var value = arr[0];
    var key = arr[1];
    obj[key] = value;
  }
  return obj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */

var strToKeys = function(arr){
  var obj = {};
  for(var i = 0; i<arr.length; i++){
    var key = arr[i];
    var value = 0;
    obj[key] = value;
  }
  return obj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */

var getValues = function(obj){
  var elem = Object.values(obj);
  return elem;
}


/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

var getKeys = function(obj){
  var arr = Object.keys(obj);
  return arr;
}


/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */

var objectToArray = function(obj){
  var arr = Object.entries(obj)
   return arr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */

var arrayToObject = function(arr){
  var obj = {};
  for(var i = 0; i<arr.length; i++){
    var keys = arr[i];
    var value = false;
    obj[keys] = value;
  }
  return obj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var arraysToObject = function(keyArr, valueArr){
  var obj = {};
  for(var i = 0; i<keyArr.length; i++){
    
  }
    for(var i = 0; i<valueArr.length; i++){
      obj[keyArr[i]] = valueArr[i];
    }
  
  return obj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */

var objectsToTuples = function(obj1, obj2){
  var arr1 = Object.entries(obj1);
  var arr2 = Object.entries(obj2);
  return arr1.concat(arr2)
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */

var mapArrayValues = function(arr){
  var obj = {};
  for(var i = 0; i<arr.length; i++){
    var keys = arr[i];
    var values = true;
    obj[keys] = values
  }
  return obj
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr){
  var obj = {};
  for(var i = 0; i<arr.length; i++){
    var keys = arr[i]
    if(keys.length >= 5){
      var values = true;
    }else{
      var values = false;
    }
    obj[keys] = values;
  }
  return obj
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr){
  var obj = {}
  for(var i = 0; i<arr.length; i++){
    var keys = arr[i];
    var values = true;
    obj[keys] = values;
  }
  return obj
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
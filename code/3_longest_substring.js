// var lengthOfLongestSubstring = function(s) {
    // if(s=="") return 0;
    // var substrings = [];
    // string = s.split('');
    // substrings[0] = string[0];
    // for(var i = 1; i < string.length; i++) {
    //     var prevString = substrings[i-1];
    //     var currentChar =  string[i];
    //     if(prevString.endsWith(currentChar)){
    //         substrings[i]=currentChar
    //     } else {
    //         if(substrings[i-1].includes(currentChar)){
    //             substrings[i] = (prevString.slice(prevString.indexOf(currentChar)+1)) + currentChar;
    //         } else {
    //             substrings[i] = prevString + currentChar;
    //         }
    //     }
    // }
    // return substrings.reduce(function(prevVal,currVal){return prevVal.length>currVal.length?prevVal:currVal;}).length;
// };

var lengthOfLongestSubstring = function(s) {
    if(s=="") return 0;
    var characters = s.split('');
    var maxSubstring = 0;
    var currentSubstring = new Map();
    for(var i = 0; i < characters.length; i++) {
        currentChar = characters[i];
        if(!currentSubstring.has(currentChar)){
            currentSubstring.set(currentChar,i);
        } else {
            i = currentSubstring.get(currentChar);
            currentSubstring.clear();
        }
        if(currentSubstring.size > maxSubstring) {
            maxSubstring = currentSubstring.size;
        }
    }
    return maxSubstring;
};

console.log(lengthOfLongestSubstring("dvdf"));
//My Solution
var twoSum = function(nums, target) {
    var complimentMap = new Map();
    var currentNum;

    //Creating a map of the compliment and the index
    for(var i = 0;i<nums.length;i++){
        currentNum = nums[i];
        var cIndx = complimentMap.get(currentNum);
        if(cIndx!=undefined){
            //If the compliment is found, return the index of its pair
            return([i, cIndx])
        } else {
            complimentMap.set(target-currentNum,i);
        }
    }
}

//Running the problem
twoSum([2,7,11,15],9);
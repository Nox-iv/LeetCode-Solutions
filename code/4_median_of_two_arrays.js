// var findMedianSortedArrays = function(nums1, nums2) {
//     nums1.push(...nums2);
//     nums1 = nums1.sort((a,b) =>{return a-b});
//     var median;
//     (nums1.length % 2 === 0) ? (median = (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2) : (median = nums1[Math.floor(nums1.length / 2)]);
//     return median;
// };

// var findMedianSortedArrays = function(nums1, nums2) {
//     if(nums1.length > nums2.length){ findMedianSortedArrays(nums2,nums1) }
//     var part1 = Math.floor(nums1.length/2);
//     var part2 = Math.floor(((nums1.length+nums2.length+1)/2)-part1);
//     if(nums1[part1-1]>nums2[part2]){
//         return findMedianSortedArrays(nums1.slice(0,part1),nums2.slice(part2))
//     } else if(nums2[part2-1]>nums1[part1]){
//         return findMedianSortedArrays(nums1.slice(part1),nums2.slice(0,part2))
//     } else {
//         if((nums1.length+nums2.length)%2==0){return(Math.floor((Math.max(nums1[part1-1],nums2[part2])+Math.min(nums1[part1],nums2[part2-1]))/2))}
//         else{return(Math.max(nums1[part1-1],nums2[part2-1]))}
//     }
// };

var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length){ return findMedianSortedArrays(nums2,nums1) }
    const N1Len = nums1.length
    const N2Len = nums2.length
    let start = 0, end = N1Len;
    while(start <= end){

        let partion1 = Math.floor((start+end)/2);
        let partion2 = Math.floor(((N1Len+N2Len)/2)-partion1);

        let N1Left = (partion1 == 0 ? -Infinity : nums1[partion1-1])
        let N1Right = (partion1 == N1Len ? Infinity : nums1[partion1])
        let N2Left = (partion2 == 0 ? -Infinity : nums2[partion2-1])
        let N2Right = (partion2 == N2Len ? Infinity : nums2[partion2])

        if(N1Left>N2Right) { end = partion1-1 }
        else if(N2Left>N1Right) { start = partion1+1 }
        else { return (((N1Len+N2Len)%2==0)? (Math.max(N1Left,N2Left) + Math.min(N1Right,N2Right))/2: Math.min(N1Right,N2Right)) }
    }
};

function genTestingArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (2000000) - 1000000));
    }
    return arr.sort((a,b) =>{return a-b});
}

var nums1 = genTestingArray(1000);
var nums2 = genTestingArray(1000);


var start = performance.now();
console.log(findMedianSortedArrays(nums1,nums2));
var end = performance.now();
console.log()
console.log("Call to findMedianSortedArrays took " + (end - start) + " milliseconds.");

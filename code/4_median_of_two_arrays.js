var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2);
    nums1 = nums1.sort((a,b) =>{return a-b});
    console.log(nums1);
    var median;
    (nums1.length % 2 === 0) ? (median = (nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2) : (median = nums1[Math.floor(nums1.length / 2)]);
    return median;
};

console.log(findMedianSortedArrays([3],[-2,-1]));


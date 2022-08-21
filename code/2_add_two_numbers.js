//My Solution
var addTwoNumbers = function(l1, l2) {
    var number1 = [];
    var number2 = [];
    var holdingList = l1;

    //Looping through the list and pushing the values into an array
    while (holdingList != null) {
        number1.push(holdingList.val);
        holdingList = holdingList.next;
    }
    holdingList = l2;
    while (holdingList != null) {
        number2.push(holdingList.val);
        holdingList = holdingList.next;
    }
    //Reversing the array and converting to a bigInt
    number1 = BigInt(number1.reverse().join(''));
    number2 = BigInt(number2.reverse().join(''));

    //Adding the two numbers and converting to array
    var sum = `${BigInt(number1 + number2)}`.split('');
    
    //Reversing the array and converting to a list
    l3 = new ListNode(sum[0]);
    for(var i = 1; i < sum.length; i++) {
        l3 = new ListNode(sum[i], l3);
    }
    return l3;

};

//Running the problem
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var lx = new ListNode(9);
var la = [9,9,9,9,9,9,9]
for(var i = 1; i < la.length; i++) {
    lx = new ListNode(la[i], lx);
}
addTwoNumbers(lx, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))));

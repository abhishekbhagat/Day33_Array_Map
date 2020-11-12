var a = new Array();
for (i = 0; i < 10; i++) {
    a[i] = getThreeDigitNumber();
}
function getThreeDigitNumber() {
    var count = 0;
    var threeDigitNum = 0;
    while (true) {
        var digit = Math.floor(Math.random() * 10);
        if (digit == 0 && count == 0) {
        }
        else {
            threeDigitNum = threeDigitNum * 10 + digit;
            count++;
        }
        if (count == 3)
            break;
    }
    return threeDigitNum;
}
console.log(a);
function findSecondMax() {
    var secondMax = -1; var max = a[0];
    for (i = 1; i < 10; i++) {
        if (a[i] > max) {
            secondMax = max;
            max = a[i];
        }
        else if (a[i] > secondMax)
            secondMax = a[i];
    }
    return secondMax;
}
function findSecondMin() {
 var secondMin = -1; var min = a[0];
    for (i = 1; i < 10; i++) {
        if (a[i] < min) {
            secondMin= min;
            min = a[i];
        }
        else if (a[i] < secondMin)
            secondMin = a[i];
    }
    return secondMin;
}
console.log("2nd Largest Number = " +findSecondMax());
console.log("2nd Minimum Number = " +findSecondMin());
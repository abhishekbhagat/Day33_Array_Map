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
a.sort();
console.log("2nd Largest Number = " + a[8]);
console.log("2nd Minimum Number = " + a[1]);


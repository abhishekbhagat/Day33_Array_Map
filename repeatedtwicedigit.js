var start = 0;
var end = 100
var repeatedarray = new Array();
var count = 0;
for (i = start; i < end; i++) {
    if (checkRepeatedTwice(i) && i > 10) {
        repeatedarray[count] = i;
        count++;
    }
}
function checkRepeatedTwice(number) {
    var copynumber = number;
    var rev = 0;
    while (copynumber > 0) {
        rev = rev * 10 + (copynumber % 10);
        copynumber = parseInt(copynumber / 10);
    }
    if (number == rev)
        return true;
    else
        return false;
}
console.log(repeatedarray);

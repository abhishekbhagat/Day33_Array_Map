var num = process.argv[2];
var number = parseInt(num);
var factors = new Array();
var count = 0;
console.log("prime factors = ")
for (i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
        factors[count] = i;
        number = number / i;
        i = 1;
        count++;
    }

}
factors[count] = number;
console.log(factors);
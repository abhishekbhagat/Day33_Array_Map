var maxValue = Number.MIN_VALUE;
var maxKey = 0
var min = Number.MAX_VALUE;
var minKey = 7;
let map = new Map();
while (true) {
    let die = Math.floor(Math.random() * 10) % 6 + 1;
    console.log(die);
    if (map.has(die)) {
        value = map.get(die);
        value++;
        map.set(die, value);
        if (value == 10)
            break;
    }
    else
        map.set(die, 1);
}
for (let [key, value] of map) {
    if (value > maxValue) {
        maxValue = value;
        maxKey = key;
    }
    if (min > value) {
        min = value;
        minKey = key;
    }
    console.log(" Die - " + key + " number of times  " + value);
}
console.log(maxKey + "  " + minKey);


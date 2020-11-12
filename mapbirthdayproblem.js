var mapBirthday = new Map();
for (noOfIndividual = 1; noOfIndividual <=50; noOfIndividual ++) {
    let month = Math.floor(Math.random() * 100) % 12 + 1;
    let choice = Math.floor(Math.random() * 10) % 2;
    let year;
    if (choice == 0)
        year = 1992;
    else
        year = 1993;
    if (!mapBirthday.has(month)) {
        mapBirthday.set(month, []);
    }
    mapBirthday.get(month).push(year);
}
for (let [key, value] of mapBirthday) {

    console.log(" Individual having birthday in  " + key + "  month  and years =" + value + "  Number of individual having same birthday month  " + value.length);
}
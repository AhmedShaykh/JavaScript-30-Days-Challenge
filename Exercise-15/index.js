let persons = ["Junaid", "Haris", "Ahsan"];

let index = persons.indexOf("Haris");

if (index == 1) {
    persons.splice(index, 1, "Yaseen");
}
else {
    console.log(persons);
}

for (var i = 0; i < persons.length; i++) {
    const message = persons[i];
    document.write(`<h2>${message} Dinner Tonight is at my Home!.</h2>`);
}
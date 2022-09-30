let persons = ["Junaid", "Haris", "Ahsan"];
let index = persons.indexOf("Haris");

if (index == 1) {
    persons.splice(index, 1, "Yaseen");
}
else {
    console.log(persons);
}

persons.push("Suleman", "Usama", "Shahid");

let remove = persons.length;

for (let i = remove; i > 2; i--) {
    persons.pop()
}

for (var i = 0; i < persons.length; i++) {
    var message = persons[i];
    document.write(`<h1>${message} Dinner Tonight is at my Home!.</h1>`);
}
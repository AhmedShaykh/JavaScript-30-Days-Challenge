let persons = ["Junaid", "Haris", "Ahsan"];
let replacePerson = "Haris";

persons.forEach((person, newPerson) => {
    if (person == replacePerson) {
        persons[newPerson] = "Yaseen";
        console.log(person);
    }
    else {
        console.log(person);
    }
});

for (var index = 0; index < persons.length; index++) {
    const message = persons[index];
    document.write(`<h2>${message} Dinner Tonight is at my Home!.<br/></h2>`);
}

document.write(`<h2>${persons} Dinner Tonight is at my Home!.</h2>`);   
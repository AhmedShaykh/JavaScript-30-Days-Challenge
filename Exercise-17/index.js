let persons = ["Junaid", "Haris", "Ahsan"];

let index = persons.indexOf("Haris");

if (index == 1) {
    persons.splice(index, 1, "Yaseen");
}
else {
    console.log(persons);
}

console.log('I Found Bigger Dinner Table!');

persons.push("Suleman", "Usama", "Shahid");

for (var i = 0; i < persons.length; i++) {
    var message = persons[i];
    console.log(`${message} Dinner Tonight is at my Home!.`);
}

console.log("I Invite Only Two Friends!")

let remove = persons.length;
console.log(remove);

// persons.splice(2);
// console.log(persons);

for (let i = remove; i > 2; i--) {
    console.log(`Sorry... ${persons[i - 1]} You Are Not Invited! Next Time InShAllah`);
    persons.pop()
}

console.log(persons);
console.log(persons.length);

persons.length = 0
console.log(persons);
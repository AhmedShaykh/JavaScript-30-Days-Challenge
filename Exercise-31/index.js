let users = ["Ahmed", "Saqlain", "Majid", "Bilal", "Usman"];

if (users.length == 0) {
    console.log(`We Need To Find Some Users!`);
}
else if (users.length >= 2) {
    console.log(users);
}
else {
    console.log(`Error 404`);
}

const removeUsers = users.length = 0;
console.log(removeUsers);
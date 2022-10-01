let currentUsers = ["Ahmed", "Saqlain", "Majid", "Bilal", "Usman"];
let newUsers = ["Ahmed", "Ahsan", "Haris", "Bilal", "Junaid"];

newUsers.forEach(user => {
    if (currentUsers.includes(user)) {
        console.log(`The ${user} Is Available!`);
    }
    else {
        console.log(`The ${user} Will Need To Enter A New Username!`);
    }
});
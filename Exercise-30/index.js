let users = ["Ahmed", "Saqlain", "Majid", "Bilal", "Usman"];

for (index of users) {
    if (index === "Ahmed") {
        console.log(`Hello ${index} Would You Like To See A Status Report...?`);
    } else {
        console.log(`Hello ${index} Thank You For Logging In Again!`);
    }
}
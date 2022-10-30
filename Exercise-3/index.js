const name = "Ahmed";

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name.toLowerCase().replace(/\b\w/g, name => name.toUpperCase()));

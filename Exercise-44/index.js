let sandwiches = ["Cheese", "Grilled Cheese", "Nutella"];

function item(...sandwiches) {
    for (i of sandwiches) {
        console.log(`${i} SandWich`);
    }
}

item(...sandwiches);
item(...sandwiches, "Chicken", "Ice Cream");
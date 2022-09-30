let coins = ["BTC", "ETH", "BNB", "SOL"];
console.log(coins);

for (let data in coins) {
    if (typeof data === "string") {
        console.log(coins[data]);
    }
    else {
        console.log("Index Error", coins[data]);
    }
}
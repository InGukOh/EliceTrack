function euroToWon(money) {
    var won = money * 1329.87;
    return won;
}
export default euroToWon;

function test() {
    console.log("export test");
}

export { test as changeName };

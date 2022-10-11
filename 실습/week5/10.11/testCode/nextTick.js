setTimeout(() => {
    // 3등
    console.log("timeout");
}, 0);

process.nextTick(() => {
    // 1등
    console.log("nextTick");
});

Promise.resolve().then(() => console.log("promise")); // 2등

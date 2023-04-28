const PromiseA = newPromise((resolve, reject) => {
    resolve(777);
});

PromiseA.then((val) =>
 console.log("asynchronous logging has val:", val));
console.log("immediate logging");
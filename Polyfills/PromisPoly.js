function MyPromise(executor) {
    let onResolve, onReject

    function resolve(val) {
        onResolve(val)
    }
    
    function reject(val) {
        onReject(val)
    }

    this.then = function (cb) {
        onResolve = cb;
        return this
    }

    this.catch = function (cb) {
        onReject = cb
        return this
    }

    executor(resolve, reject)
}


const a = new MyPromise((resolve, reject) => {
    resolve("WAsssuppp")
})
a.then((m) => console.log(m)).catch((e) => console.error(e))
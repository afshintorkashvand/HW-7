

export function loadFile(id, options = { fail: false }) {
    const promiseLoadFile = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (options.fail === true) {
                return reject(new Error("Error"))
            }
            resolve({ id, pages: 4 });
        }, 30);
    }
    )
    return promiseLoadFile
}



export function loadPolicy(options = { fail: false }) {
    const promiseLoadPolicy = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (options.fail === true) {
                return reject(new Error("Error"))
            }
            resolve({ maxPages: 5 })
        }, 10);
    })
    return promiseLoadPolicy
}



export function saveSummary(summary, options = { fail: false }) {
    const promiseSaveSummary = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (options.fail === true) {
                return reject(new Error("Error"))
            }
            resolve({
                saved: true,
                summary
            })
        }, 20);
    })
    return promiseSaveSummary
}
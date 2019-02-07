const getDataCallback = (callback) => {
    setTimeout(()=>{
        callback(undefined, 'This is the data')
        //callback('This is the error', undefined);
    }, 2000);
}


getDataCallback((err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

const getDataPromise = (num) => new Promise ( (resolve, reject) => {
    setTimeout( () => {
        typeof num === 'number' ?
        resolve(num * 2):
        reject('Number must be provided');
        //reject('This is the promises error')
    }, 2000)
})


getDataPromise('10').then((data) => {
    return getDataPromise(data);
}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err);
})
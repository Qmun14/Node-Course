const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7, 4, 1]);
        reject('Something went wrong!');
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log('succes', result);
}).catch( (error) => {
    console.log('Error', error);
})

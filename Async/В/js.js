const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 3000 < 2000) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
})
.catch (err => console.error('Error', err));
    
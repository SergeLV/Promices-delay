const array = [1, 2, 3, 4, 5];

const getDelayed = item =>
    new Promise(resolve =>
        setTimeout(() => resolve(item), 1000));

let temp = Promise.resolve();

array.forEach(
    item => temp = temp
        .then(() => getDelayed(item))
        .then(i => console.log(i))
);

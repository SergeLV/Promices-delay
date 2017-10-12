const array = [1, 2, 3, 4, 5];

const getDelayed = (element, delay) =>
    new Promise(resolve =>
        setTimeout(() => resolve(element), delay));

let temp = Promise.resolve();

array.forEach(
    element => temp = temp
        .then(() => getDelayed(element, 1000))
        .then(result => console.log(result))
);

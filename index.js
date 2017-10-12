// First
function logDelayed(array, delay) {

    let accumulate = Promise.resolve();

    array.forEach(element =>
        accumulate = accumulate
            .then(() => new Promise(
                resolve => setTimeout(resolve, delay))
            )
            .then(() => console.log(element))
    );
};

logDelayed([ 1, 2, 3, 4, 5 ], 1000);


// Second
const array = [...Array(5).keys()];

const getDelayed = (element, delay) =>
    new Promise(resolve =>
        setTimeout(() => resolve(element), delay));

let temp = Promise.resolve();

array.forEach(
    element => temp = temp
        .then(() => getDelayed(element, 1000))
        .then(result => console.log(result))
);

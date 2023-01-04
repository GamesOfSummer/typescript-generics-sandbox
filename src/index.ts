const consoleBuffer = () => {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};

const dragons = [
    { color: 'red', temperment: 'spicy', mass: 100 },
    { color: 'blue', temperment: 'calm', mass: 5 },
];

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

consoleBuffer();

const array = getArray(dragons);
console.log(array);

consoleBuffer();

export {};

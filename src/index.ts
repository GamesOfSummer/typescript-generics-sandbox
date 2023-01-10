const consoleBuffer = () => {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};

interface Animal {
    color: string;
    temperment: string;
}

const dragons = [
    { color: 'red', temperment: 'spicy', mass: 100 },
    { color: 'blue', temperment: 'calm', mass: 5 },
];

const cats = [
    { color: 'tabby', temperment: 'spicy', weight: 100 },
    { color: 'calico', temperment: 'calm', weight: 5 },
    { color: 'grey', temperment: 'shy', weight: 5 },
];

function concatArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

function getArrayLength<Type>(items: Type[]): number {
    return items.length;
}

function getColors<T, K extends Animal>(items: Animal[]): string[] {
    return items.map((x) => x.color);
}

consoleBuffer();

console.log(concatArray(dragons));
console.log('Length : ' + getArrayLength(dragons));
console.log('Colors : ' + getColors(dragons));

consoleBuffer();

console.log(concatArray(cats));
console.log('Length : ' + getArrayLength(cats));
console.log('Colors : ' + getColors(cats));

consoleBuffer();

export {};

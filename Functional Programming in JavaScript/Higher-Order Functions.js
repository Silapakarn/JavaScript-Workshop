//My Filter
const persons = [
    { name: "John", age: 17 },
    { name: "kan", age: 10 },
    { name: "kon", age: 15 }
];


const kids = persons.filter(obj => obj.age <= 15);
console.log('kids', kids);

function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const elements = arr[i];
        if (callback(elements)) {
            result.push(elements);
        }
    }
    return result;
}

console.log('       ');
const kid2 = myFilter(persons, obj => obj.age <= 15);
console.log('kids', kid2);


function Mymap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const elements = arr[i];
        result.push(callback(elements));
    }
    return result;
}

console.log('       ');
const kid3 = Mymap(persons, obj => obj.age <= 15);
console.log('kids', kid3);
"use strict";
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortById(data, direction = 'asc') {
    return [...data].sort((a, b) => {
        switch (direction) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sortById(data));
console.log(sortById(data, 'desc'));

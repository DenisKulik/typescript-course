"use strict";
const groupData = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(list, key) {
    return list.reduce((map, item) => {
        const keyValue = item[key];
        if (map[keyValue]) {
            map[keyValue].push(item);
        }
        else {
            map[keyValue] = [item];
        }
        return map;
    }, {});
}
console.log(group(groupData, 'group'));

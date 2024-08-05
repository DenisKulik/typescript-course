"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class ExtentedListClass extends List {
    constructor(items) {
        super(items);
        this.items = items;
    }
    first() {
        return this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            console.log(this.isOpened);
            return this.items[0];
        }
    };
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
}
const list = ExtendedList(AccordionList);
const extendedList = new list(['a', 'b', 'c']);
console.log(extendedList.first());

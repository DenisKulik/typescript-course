type Constructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {}
}

class Accordion {
    isOpened: boolean
}

type ListType = Constructor<List>
type AccordionType = Constructor<Accordion>

class ExtentedListClass extends List {
    constructor(public items: string[]) {
        super(items)
    }

    first() {
        return this.items[0]
    }
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            console.log(this.isOpened)
            return this.items[0]
        }
    }
}

class AccordionList {
    isOpened: boolean

    constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList)
const extendedList = new list(['a', 'b', 'c'])
console.log(extendedList.first())


class Auto {
    run: number
}

function kmToMiles<T extends Auto>(auto: T): T {
    auto.run = auto.run / 1.6
    return auto
}

class LCV extends Auto {
    capacity: number
}

kmToMiles({run: 1})
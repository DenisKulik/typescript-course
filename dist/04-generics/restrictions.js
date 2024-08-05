"use strict";
class Auto {
}
function kmToMiles(auto) {
    auto.run = auto.run / 1.6;
    return auto;
}
class LCV extends Auto {
}
kmToMiles({ run: 1 });

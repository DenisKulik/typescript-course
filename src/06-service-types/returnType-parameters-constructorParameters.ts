class Car {
    constructor(public id: number, public name: string) {
    }
}

function getDataCar(id: number): Car {
    return new Car(id, 'BMW');
}

type ReturnFnType = ReturnType<typeof getDataCar>
type ParametersFnType = Parameters<typeof getDataCar>
type ConstructorParametersFnType= ConstructorParameters<typeof Car>
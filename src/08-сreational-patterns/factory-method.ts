interface IInsurance {
    id: number
    status: string
    setVehicle(vehicle: any): void
    submit(): Promise<boolean>
}

class TFInsurance implements IInsurance {
    id: number
    status: string
    private vehicle: any
    constructor(id: number) {
        this.id = id
        this.status = 'new'
    }
    setVehicle(vehicle: any): void {
        this.vehicle = vehicle
    }
    submit(): Promise<boolean> {
        return new Promise((resolve) => {
            resolve(true)
        })
    }
}

abstract class InsuranceFactory {
    db: any

    abstract createInsurance(): IInsurance

    saveHistory(insurance: IInsurance): void {
        this.db.save(insurance.id, insurance.status)
    }
}

class TFInsuranceFactory extends InsuranceFactory  {
    createInsurance(): TFInsurance {
        return new TFInsurance(id)
    }
}

const tfInsuranceFactory = new TFInsuranceFactory()
const insurance = tfInsuranceFactory.createInsurance()
tfInsuranceFactory.saveHistory(insurance)
"use strict";
class TFInsurance {
    constructor(id) {
        this.id = id;
        this.status = 'new';
    }
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    submit() {
        return new Promise((resolve) => {
            resolve(true);
        });
    }
}
class InsuranceFactory {
    saveHistory(insurance) {
        this.db.save(insurance.id, insurance.status);
    }
}
class TFInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new TFInsurance(id);
    }
}
const tfInsuranceFactory = new TFInsuranceFactory();
const insurance = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(insurance);

import { Directive } from "@angular/core";
import { FormGroup, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    providers: [{
        multi: true,
        provide: NG_VALIDATORS,
        useExisting: LocationValidator,
    }],
    selector: "[validateLocation]",
})

export class LocationValidator implements Validator {
    public validate(formGroup: FormGroup): { [key: string]: any } {
        let [address, city, country, onlineUrl] = ["address", "city", "country", "onlineUrl"];
        let addressControl = formGroup.controls[address];
        let cityControl = formGroup.controls[city];
        let countryControl = formGroup.controls[country];
        let onlineUrlControl = (<FormGroup> formGroup.root).controls[onlineUrl];

        if ((addressControl && addressControl.value &&
            cityControl && cityControl.value &&
            countryControl && countryControl.valid) ||
            (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return {validateLocation: false};
        }
    }
}

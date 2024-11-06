import {regexDate, regexDistance} from "./data/constants.js";
import { IInitialForm } from "./models/IInitialForm.js";

export const sortByDate = (a:IInitialForm, b:IInitialForm) => {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date > b.date) {
        return -1;
    }
    return 0;
}

export const isValidDate = (date : string) => {
    return regexDate.test(date)
}

export const isValidDistance = (distance: string) => {
    return regexDistance.test(distance)
}
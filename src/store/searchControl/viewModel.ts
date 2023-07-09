import { makeAutoObservable } from "mobx";
import {Model} from "./model";

import { CountryInfo } from "../../api/apiService";

export interface IViewModelSearchControl {
    model: Model,
    value: string,
    helpValues: CountryInfo[],
    loading: boolean,
    addText(s:string): void,
    fetchCountries(s:string): void
}

class Control implements IViewModelSearchControl  {
    model = new Model()
    
    constructor() {
        makeAutoObservable(this)
    }


    addText = (text: string) => {
        this.model.value = text;
        this.fetchCountries(text);
    }

    fetchCountries = (text:string) => {
        this.model.fetchCountries(text)
    } 

    get value() {
        return this.model.value
    }

    get helpValues() {
        return this.model.helpValues
    }

    get loading() {
        return this.model.loading
    }
}

export default Control
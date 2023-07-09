import { makeAutoObservable, toJS } from "mobx";
import {getCountryByName} from '../../api/apiService';

import { CountryInfo } from "../../api/apiService";


interface IModelSearchControl {
    value: string,
    helpValues: CountryInfo[],
    loading: boolean,
    fetchCountries(s: string): void
}


export class Model implements IModelSearchControl {
    private _value: string = '';
    private _helpValues: CountryInfo[] = [];
    private _loading: boolean = false;
    
    timer: NodeJS.Timeout | null = null;


    constructor() {
        makeAutoObservable(this)
    }


    set value(value: string) {
        this._value = value;
    }

    set helpValues(newValues: CountryInfo[]) {
        this._helpValues = newValues;
    }

    set loading(loading: boolean) {
        this._loading = loading;
    }

    get value() {
        return this._value;
    }

    get helpValues() {
        return this._helpValues;
    }

    get loading() {
        return this._loading
    }

    private async _fetchCountries(text: string) {
        try {
            if(!text) {
                this.helpValues = [];
                this.loading = false;
                return;
            }
    
            // this.loading = true;
            const response = await getCountryByName(text);
            this.helpValues = [...response];
            this.loading = false;   
    
    
            // очищаем список, если ввели полное название страны
            if(this.helpValues.length && text.toLowerCase() === toJS(this.helpValues[0].name.toLowerCase())) {
                this.helpValues = [];
                this.loading = false;
            }
        } catch (error) {
            console.log(error)
        }

    }

    fetchCountries(text:string) { // throttled fetch
        this.loading = true;
        if(this.timer) clearTimeout(this.timer);
        
        this.timer = setTimeout(() => {
            this._fetchCountries(text)
        }, 500);
    }
}


const model = new Model();


export default model
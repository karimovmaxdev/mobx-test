import { makeAutoObservable } from "mobx";

interface IModelTextControl {
    value: string,
    defaultValue: string,
}

export class Model implements IModelTextControl {
    private _defaultValue: string = 'Entire Text'
    private _value: string = this._defaultValue;

    constructor() {
        makeAutoObservable(this)
    }


    set value(value: string) {
        this._value = value;
    }

    get value() {
        return this._value;
    }


    get defaultValue() {
        return this._defaultValue
    }
}
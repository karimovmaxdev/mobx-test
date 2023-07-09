import { makeAutoObservable } from "mobx";
import {Model} from "./model";
// import model from "./model";

interface IViewModelTextControl {
    model: Model,
    value: string,
    defaultValue: string,
    addText(T: string): void,
}

class Control implements IViewModelTextControl  {
    model = new Model()
    
    constructor() {
        makeAutoObservable(this)
    }


    addText = (text: string) => {
        this.model.value = text
    }


    get value() {
        return this.model.value
    }

    get defaultValue() {
        return this.model.defaultValue
    }


}

export default Control
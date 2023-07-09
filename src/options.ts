import { STORE } from "./store";

// interface
export type buttonConfig = {
    text: string,
    position: 'left' | 'right',
    callback(): void
}

const buttonsConfig1: buttonConfig[] = [
    {
      text: 'Очистить поле',
      position: 'right',
      callback() {
        STORE.TEXT_CONTROL_STORE_1.addText('')
      }
    },
    {
      text: 'Hello World',
      position: 'right',
      callback() {
        STORE.TEXT_CONTROL_STORE_1.addText('Hello World')
      }
    },
]
  
const buttonsConfig2: buttonConfig[] = [
    {
      text: 'ALERT TEXT',
      position: 'right',
      callback() {
        alert(STORE.TEXT_CONTROL_STORE_2.value)
      }
    },
    {
      text: 'ALERT NUMBER',
      position: 'left',
      callback() {
        const {value} = STORE.TEXT_CONTROL_STORE_2;
        isNaN(Number(value)) ? console.log('Вы ввели не число') : alert(value)
      }
    },
]

export const options = {
    TEXT_CONTROL_1_OPTIONS: {
        store: STORE.TEXT_CONTROL_STORE_1,
        buttons: buttonsConfig1,
    },
    TEXT_CONTROL_2_OPTIONS: {
        store: STORE.TEXT_CONTROL_STORE_2,
        buttons: buttonsConfig2,
    },

    SEARCH_CONTROL_1_OPTIONS: {
        store: STORE.SEARCH_CONTROL_STORE_1,
        length: 3,
    },
    SEARCH_CONTROL_2_OPTIONS: {
        store: STORE.SEARCH_CONTROL_STORE_2,
        length: 10,
    },
}
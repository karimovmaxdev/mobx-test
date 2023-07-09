import React from "react";
import { observer } from "mobx-react-lite";


import Button from "./Button";
import Input from "./Input";

import {IViewModelTextControl} from '../../store/textControl/viewModel';

import { buttonConfig } from "../../options";


interface ITextProps {
    options: buttonConfig[],
    store: IViewModelTextControl,
}

function Wrapper({store, options}:ITextProps) {
  return (
    <div className="textControl"> 
      { options.filter(it => it.position === 'left').map((it, idx) => <Button key={idx} text={it.text} callback={it.callback}/>) }

      <Input 
        value={store.value === store.defaultValue ? '' : store.value} 
        defaultValue={store.defaultValue}
        changeValue={store.addText}
      />
            
      { options.filter(it => it.position === 'right').map((it, idx) => <Button key={idx} text={it.text} callback={it.callback}/>) }
    </div>
  )
}

export default observer(Wrapper);

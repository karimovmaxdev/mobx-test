import React from "react";



interface IControlProps {
  value: string,
  defaultValue?: string,
  changeValue(text: string): void
}

function TextControl({value, defaultValue, changeValue}: IControlProps) {  
  return (
      <input 
        type="text" 
        value={value === defaultValue ? '' : value} 
        placeholder={defaultValue} 
        onChange={(e) => changeValue(e.target.value)}
      />
  )
}

export default TextControl;

import React from "react";

interface IInputProps {
  value: string,
  changeValue(S: string): void
}

function SearchInput({changeValue, value}: IInputProps) {

  return (
    <>
      <input 
        type="text" 
        value={value} 
        placeholder={'Введите страну'} 
        onChange={(e) => changeValue(e.target.value)}
      />
    </>
  )
}

export default SearchInput;

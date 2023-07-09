import React from "react";

interface IBtnProps {
  text: string,
  callback(): void
}

function Button({text, callback}:IBtnProps) {
  
  return (
    <>
      <button onClick={() => callback()}>{text}</button>
    </>
  )
}

export default React.memo(Button);

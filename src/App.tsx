import React from "react";
import "./App.css";

// config 
// настройка компонентов осуществляется через options
// для TextControl можно установить конфиг каждой кнопки (text, callback)
// для SearchControl можно устанвить length
import { options } from "./options";


// components
import TextControl from "./components/textControl/TextControl";
import SearchControl from "./components/seacrhControl/SearchControl";



function App() {

  return (
    <>
      <TextControl store={options.TEXT_CONTROL_1_OPTIONS.store} options={options.TEXT_CONTROL_1_OPTIONS.buttons} />
      <TextControl store={options.TEXT_CONTROL_2_OPTIONS.store} options={options.TEXT_CONTROL_2_OPTIONS.buttons} />

      <SearchControl store={options.SEARCH_CONTROL_1_OPTIONS.store} length={options.SEARCH_CONTROL_1_OPTIONS.length} />
      <SearchControl store={options.SEARCH_CONTROL_2_OPTIONS.store} length={options.SEARCH_CONTROL_2_OPTIONS.length} />
    </>
  )
}

export default App;

import React, {useMemo} from "react";
import { observer } from "mobx-react-lite";
import SearchInput from "./SearchInput";
import HelpList from "./HelpList";

//types 
import IViewModelControl from '../../store/searchControl/viewModel'


interface ISearch {
    length: number,
    store: IViewModelControl,
}


function SearchControl({length, store}: ISearch) {
  
  const countries = useMemo(() => store.helpValues.slice(0, length), [store.helpValues, length])

  return (
    <div className="searchControl">
      <SearchInput 
        value={store.value} 
        changeValue={store.addText} 
    />
      <HelpList 
        countries={countries} 
        loading={store.loading} 
        setCountry={store.addText} 
    />
    </div>
  )
}

export default observer(SearchControl);

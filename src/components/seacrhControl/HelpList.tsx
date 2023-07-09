import React from "react";

import { CountryInfo } from "../../api/apiService";


interface IHelpList {
  countries: CountryInfo [],
  setCountry(s: string): void,
  loading: boolean
}

function HelpList({countries, loading = false, setCountry}: IHelpList) {

  return (
    <div className="helpList">

      {loading && <p>Загрузка...</p>}

      {!loading && 
        <ul>
          {countries.map((it, idx) => <li onClick={(e) => setCountry(it.name)} key={idx}>
            <img src={it.flag} alt='' />
            {it.name} - {it.fullName}
          </li>)}
        </ul>
      }
    </div>
  )
}

export default React.memo(HelpList);

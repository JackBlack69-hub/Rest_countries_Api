import { Link } from "react-router-dom";
import { useForm } from "../../context/ThemeContext";
import { SingleCountryTS } from "../../Types/SingleCountry";
import * as C from "./styles";

export const SingleCountry = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencie,
  languages,
  borders,
  flag,
}: SingleCountryTS) => {
  const { state } = useForm();
  return (
    <C.CountryData theme={state.theme}>
      <img src={flag} alt={`Bandeira do País: ${name}`} />
      <div className="data--area">
        <h1>{name}</h1>
        <div className="data--firstArea">
          <p>
            <span>Native Name: </span>
            {nativeName}
          </p>
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Subregion: </span>
            {subregion}
          </p>
          {capital && (
            <p>
              <span>Capital: </span>
              {capital}
            </p>
          )}
          <p className="topLevel">
            <span>Top Level Domain: </span>
            {topLevelDomain}
          </p>
          {currencie && (
            <p>
              <span>Currencies: </span>
              {currencie.map((item) => item.name)}
            </p>
          )}
          <p>
            <span>Languages: </span>
            {languages.map((item, index) => (
              <span className="language" key={index}>
                {item.name}
              </span>
            ))}
          </p>
        </div>
        {borders && (
          <div className="border--area">
            <p>Border Countries: </p>
            <div className="borders">
              {borders.map((item, index) => (
                <Link to={`/code/${item}`} key={index}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </C.CountryData>
  );
};

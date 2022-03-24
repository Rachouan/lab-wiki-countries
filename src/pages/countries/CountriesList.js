import { Link } from 'react-router-dom';

export const CountriesList = ({countries}) => {
  
  return (
    <div className="col-4 border-end px-0">
      <ul className="list-group list-group-flush">
      {countries.map(({name,alpha2Code,alpha3Code},i) => {
      return <li className="list-group-item" key={i}>
                <Link to={`/${alpha3Code}`} className="d-inline-block text-center text-dark text-decoration-none w-100">
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} className="mb-3 mx-auto"/>
                  <h2 className="h5">{name.official}</h2>
                </Link> 
            </li>   
      })}
      </ul>
    </div>
  )
}

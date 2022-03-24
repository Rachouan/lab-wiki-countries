import axios from "axios";
import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";


export const CountryDetails = () => {
    const {id} = useParams();
    const [country, setCountry] = useState()
    useEffect(() => {
        ( async () => {
            try{
                const {data} = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id.toUpperCase()}`);
                setCountry(data);
            }catch(err){
                console.log(err);
            }
            
        })();
    },[country]);

    return (
        <div className="text-center">
            {country ? <><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} className="mx-auto mb-3"/>
            <h1>{country.name.official}</h1>
            <ul className="list-group list-group-flush">
                <li className="row"><div className="col-6">Capital:</div><div className="col-6">{country.capital}</div></li>
                <li className="row"><div className="col-6">Area:</div><div className="col-6">{country.area}m&sup2;</div></li>
                <li className="row"><div className="col-6">Borders:</div><div className="col-6"><ul className="list-unstyled">{country.borders.map((border,i)=><li><Link key={i} to={`/${border}`}>{border}</Link></li>)}</ul></div></li>
            </ul>
            </>
            : <p>No found</p>}
        </div>
    )
}

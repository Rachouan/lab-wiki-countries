import { Route, Routes} from 'react-router-dom';
import { CountriesList } from './pages/countries/CountriesList';
import { CountryDetails } from './pages/countries/CountryDetails';
import { Navbar } from './components/navigation/Navbar';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {

  const [countries,setCountries] = useState([]);

  useEffect(() => {
    (async () => {

      try{
          const {data} = await axios.get('https://ih-countries-api.herokuapp.com/countries');
          setCountries(data);
      }catch(err){
          console.log(err);
      }

    })();
    
  },[countries]);

  return (
    <div className="App">
      <Navbar/>
      <div className="container py-4">
        <div className="row">
          <CountriesList countries={countries}/>
          <div className="col">
            <Routes>
              <Route path="/:id" element={<CountryDetails/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

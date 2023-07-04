import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import allCountries from './services/countries.service';
import Swal from 'sweetalert2';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    allCountries()
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCountries(data);
      })
      .catch(error => console.log(error));
  }, []);

  const showCapital = (country) => {
    console.log(country);
    Swal.fire({
      title: country.name.common,
      text: country.capital,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  }

  return (
    <div className="container">
      <h1>Paises del mundo</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td onClick={()=> {showCapital(country)}}>{country.name.common}</td>
                <td>{country.region}</td>
              </tr>
            )
          })}
          {
            countries.length === 0 && (
              <tr className='text-center'>
                <td colSpan="4">No hay datos</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

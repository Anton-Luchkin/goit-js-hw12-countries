import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';

const refs = {
  input: document.querySelector('.input'),
  countriesWrap: document.querySelector('.countriesList'),
};

const countriesContainer = document.querySelector('.countriesList');
const oneCountriContainer = document.querySelector('.aboutCountri');


function cleaner(){
  countriesContainer.innerHTML = '';
  oneCountriContainer.innerHTML = '';
}
refs.input.addEventListener('input', 
debounce((event => {
  const searchQuery = `https://restcountries.eu/rest/v2/name/${event.target.value}`;
  cleaner();
  fetchCountries(searchQuery)
}), 1000)
);
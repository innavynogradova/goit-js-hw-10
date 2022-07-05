import './css/styles.css';
import { fetchCountries } from "./fetchCountries.js";
import { buildCountryMarkup } from './buildCountryMarkup';
import { buildCountryListMarkup } from './buildCountryListMarkup';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
let inputValue = null;

const refs = {
    countryCard: document.querySelector(".country-info"),
    countryList: document.querySelector(".country-list"),
    input: document.querySelector("#search-box")
}

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {

    inputValue = event.target.value.trim();

    if(inputValue === "" || inputValue === " ") {
        refs.countryList.innerHTML = "";
        refs.countryCard.innerHTML = "";
        return Notify.warning('Search query is empty!');;
    }
        
    fetchCountries(inputValue)
        .then(data => {
            if(data.length === 1) {
                refs.countryList.innerHTML = "";
                return refs.countryCard.innerHTML = buildCountryMarkup(data[0]);
            }
            if(data.length >= 2 && data.length <= 10) {
                refs.countryCard.innerHTML = "";
                return refs.countryList.innerHTML = buildCountryListMarkup(data);
            }
            else {
                return Notify.info('Too many matches found. Please enter a more specific name.');
            }
        })
        .catch(err => {
            refs.countryList.innerHTML = "";
            refs.countryCard.innerHTML = "";
            Notify.failure("Oops, there is no country with that name")
        })
}

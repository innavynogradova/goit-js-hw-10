export const buildCountryMarkup = ({ 
    name: {official}, 
    capital, 
    population, 
    flags: {svg}, 
    languages 
}) => {
        const markup = `
            <div class="country__wrap">
                <img class="country__flag" src="${svg}" alt="Flag of ${official}" width="60" height="40">
                <h2>${official}</h2>
            </div>
            <p><span class="country__parameters">Capital: </span>${capital}</p>
            <p><span class="country__parameters">Population: </span>${population}</p>
            <p><span class="country__parameters">Languges: </span>${Object.values(languages)}</p>
        `;
        return markup;
}
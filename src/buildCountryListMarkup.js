export const buildCountryListMarkup = (countries) => {

    const markup = countries.map(({ 
        name: {official}, 
        flags: {svg}
    }) => {
        return `
            <li class="country__wrap">
                <img src="${svg}" alt="Flag of ${official}" width="30" height="20">
                <h2 class="country__name">${official}</h2>
            </li>
        `        
        })
        .join(' ');
    return markup;
}
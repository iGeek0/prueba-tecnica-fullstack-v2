

const allCountries = () => {
    return fetch('https://restcountries.com/v3.1/region/americas', {
        method: 'POST',
    })
}

export default allCountries;
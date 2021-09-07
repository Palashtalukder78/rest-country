// All Countries Load And Display in the Website 
const loadAllcountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayAllCountries(data))
}
loadAllcountries();

const displayAllCountries = countries => {
    for (const country of countries) {
        const countriesContainer = document.getElementById('countriesContainer');
        const div = document.createElement('div');
        div.classList.add('col-md-6');
        div.innerHTML = `
            <div class="card m-1" style="width: 18rem; height: 293px">
                <img class="img-fluid" src="${country.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <button onclick="api('${country.name}')" class="btn btn-primary">Details</button>
                </div>
            </div>
        `;
        countriesContainer.appendChild(div);
    }
}

// Search Section 
const searchButton = () => {
    spinner('block');
    spinner('none');
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';
    api(inputText)
    /* const url = `https://restcountries.eu/rest/v2/name/${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0])) */
}
const api = countryName =>{
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}
const mainContainer = display => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.style.display = display;
}
const spinner = display => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = display;
}

 const details = contry => {
    displayDetails(contry);
 }
const displayDetails = country => {
    console.log(country);
    mainContainer('block');
    spinner('none');
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add = 'col';
    div.innerHTML = `
        <h3>Details</h3>
        <div class="card">
            <img src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body text-dark">
                <h5 class="card-title">${country.name}</h5>
                <p>Population: ${country.population}</p>
                <p>Capital City: ${country.capital}</p>
                <p>Region: ${country.region}</p>
                <p>Area: ${country.area}</p>
                <p>Borders: ${country.borders ? country.borders[0]: 'nai'}</p>
                <p>CallingCodes: ${country.callingCodes}</p>
                <p>Timezones: ${country.timezones}</p>
            </div>
        </div>
    `;
    detailsContainer.appendChild(div);
}

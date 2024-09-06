import * as dados from 'dados.js';

let selectedCountry = 'argentina';


function updateCountryInfo() {
    const selectElement = document.getElementById('country');
    selectedCountry = selectElement.value;
    const countryInfo = document.getElementById('country-info');
    const countryData = countriesInfo[selectedCountry];
    if (!countryData) {
        countryInfo.innerHTML = 'Informações não encontradas para o país selecionado.';
        return;
    }
    const { pib, lingua, fonteEconomia, populacao } = countryData;
    countryInfo.innerHTML = `
        <img src="img/${selectedCountry}.png" alt="${selectedCountry}">
        <h2>${selectedCountry[0].toUpperCase() + selectedCountry.slice(1)}</h2>
        <div class="country-info-box">
            <h3>PIB</h3>
            <p>${pib}</p>
        </div>
        <div class="country-info-box">
            <h3>Língua</h3>
            <p>${lingua}</p>
        </div>
        <div class="country-info-box">
            <h3>Fonte da Economia</h3>
            <p>${fonteEconomia}</p>
        </div>
        <div class="country-info-box">
            <h3>População</h3>
            <p>${populacao}</p>
        </div>
    `;
}

async function converter() {
    const reaisInput = document.getElementById('reais');
    const reaisValue = parseFloat(reaisInput.value);
    console.log('Valor em reais:', reaisValue);

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/BRL`);
        const data = await response.json();
        console.log('Taxas de câmbio:', data.rates);

        let selectedCurrency = '';
        switch (selectedCountry) {
            case 'argentina':
                selectedCurrency = 'ARS';
                break;
            case 'haiti':
                selectedCurrency = 'HTG';
                break;
            case 'bolivia':
                selectedCurrency = 'BOB';
                break;
            case 'honduras':
                selectedCurrency = 'HNL';
                break;
            case 'brasil':
                selectedCurrency = 'BRL';
                break;
            case 'mexico':
                selectedCurrency = 'MXN';
                break;
            case 'chile':
                selectedCurrency = 'CLP';
                break;
            case 'nicaragua':
                selectedCurrency = 'NIO';
                break;
            case 'colombia':
                selectedCurrency = 'COP';
                break;
            case 'panama':
                selectedCurrency = 'PAB';
                break;
            case 'costa-rica':
                selectedCurrency = 'CRC';
                break;
            case 'paraguai':
                selectedCurrency = 'PYG';
                break;
            case 'cuba':
                selectedCurrency = 'CUP';
                break;
            case 'peru':
                selectedCurrency = 'PEN';
                break;
            case 'equador':
                selectedCurrency = 'USD';
                break;
            case 'república-dominicana':
                selectedCurrency = 'DOP';
                break;
            case 'el-salvador':
                selectedCurrency = 'SVC';
                break;
            case 'uruguai':
                selectedCurrency = 'UYU';
                break;
            case 'guatemala':
                selectedCurrency = 'GTQ';
                break;
            case 'venezuela':
                selectedCurrency = 'VES';
                break;
            default:
                throw new Error(`Moeda não suportada: ${selectedCountry}`);
        }

        const rate = data.rates[selectedCurrency];
        if (!rate) {
            throw new Error(`Taxa de câmbio para ${selectedCurrency} não encontrada.`);
        }
        console.log('Taxa de câmbio:', rate);

        const convertedValue = (reaisValue * rate).toFixed(2);
        console.log('Valor convertido:', convertedValue);

        const convertedElement = document.getElementById('converted');
        convertedElement.innerText = `Valor convertido: ${convertedValue} ${selectedCurrency.toUpperCase()}`;
    } catch (error) {
        console.error('Erro ao obter a taxa de câmbio:', error);
        const convertedElement = document.getElementById('converted');
        convertedElement.innerText = 'Erro ao converter. Por favor, tente novamente mais tarde.';
    }
}

function updateCountryDropdown() {
    const selectElement = document.getElementById('country');
    const options = Array.from(selectElement.options);
    options.sort((a, b) => a.text.localeCompare(b.text));
    selectElement.innerHTML = '';
    options.forEach(option => selectElement.add(option));
}


function updateCoinImage() {
    const selectedCountry = document.getElementById('country').value;
    const coinImage = document.getElementById('coinImage');
    coinImage.src = coinImages[selectedCountry];
}

function updateCountry() {
    updateCountryInfo();
    updateCoinImage();
    updateCountryDropdown();
}

updateCountry();



function changeLanguage(language) {
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('select-country-label').textContent = translations[language].selectCountryLabel;
    document.getElementById('label-reais').textContent = translations[language].labelReais;
    document.getElementById('convert-btn').textContent = translations[language].convertBtn;
    document.getElementById('gallery-title').textContent = translations[language].galleryTitle;
    updateCountryInfo(language);
}

function updateCountryInfo(language) {
    const countryInfo = document.getElementById('country-info');
    const countryData = countriesInfo[selectedCountry];
    if (!countryData) {
        countryInfo.innerHTML = translations[language].countryNotFound;
        return;
    }
    const { pib, lingua, fonteEconomia, populacao } = countryData;
    countryInfo.innerHTML = `
            <img src="img/${selectedCountry}.png" alt="${selectedCountry}">
            <h2>${selectedCountry[0].toUpperCase() + selectedCountry.slice(1)}</h2>
            <div class="country-info-box">
                <h3>${language === 'pt' ? 'PIB' : 'PIB'}</h3>
                <p>${pib}</p>
            </div>
            <div class="country-info-box">
                <h3>${language === 'pt' ? 'Língua' : 'Idioma'}</h3>
                <p>${lingua}</p>
            </div>
            <div class="country-info-box">
                <h3>${language === 'pt' ? 'Fonte da Economia' : 'Fuente de la Economía'}</h3>
                <p>${fonteEconomia}</p>
            </div>
            <div class="country-info-box">
                <h3>${language === 'pt' ? 'População' : 'Población'}</h3>
                <p>${populacao}</p>
            </div>
        `;
}

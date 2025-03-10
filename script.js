let selectedCountry = 'brasil';

const countriesInfo = {
    argentina: {
        pib: 'US$ 487,2 bilhões (2021)',
        lingua: 'Espanhol',
        fonteEconomia: 'Agricultura, indústria e serviços',
        populacao: '45,38 milhões'
    },
    haiti: {
        pib: 'US$ 19,4 bilhões',
        lingua: 'Francês e crioulo haitiano',
        fonteEconomia: 'Agricultura, têxteis e turismo',
        populacao: '11,4 milhões'
    },
    bolivia: {
        pib: 'US$ 46,69 bilhões',
        lingua: 'Espanhol, quechua, aimará e guarani',
        fonteEconomia: 'Agricultura, mineração e gás natural',
        populacao: '11,67 milhões'
    },
    honduras: {
        pib: 'US$ 26,3 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Agricultura, têxteis e café',
        populacao: '10,05 milhões'
    },
    brasil: {
        pib: 'US$ 3,38 trilhões',
        lingua: 'Português',
        fonteEconomia: 'Agricultura, indústria, serviços e mineração',
        populacao: '213,99 milhões'
    },
    mexico: {
        pib: 'US$ 1,27 trilhão',
        lingua: 'Espanhol',
        fonteEconomia: 'Automóveis, eletrônicos, petróleo e turismo',
        populacao: '130,26 milhões'
    },
    chile: {
        pib: 'US$ 323,2 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Mineração, agricultura, pesca e silvicultura',
        populacao: '19,52 milhões'
    },
    nicaragua: {
        pib: 'US$ 14,97 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Agricultura, mineração, turismo e pesca',
        populacao: '6,62 milhões'
    },
    colombia: {
        pib: 'US$ 331,5 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Petróleo, mineração, café e flores',
        populacao: '51,65 milhões'
    },
    panama: {
        pib: 'US$ 66,8 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Logística, turismo, serviços e comércio',
        populacao: '4,43 milhões'
    },
    'costa-rica': {
        pib: 'US$ 61,5 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Turismo, eletrônicos, software e agricultura',
        populacao: '5,15 milhões'
    },
    paraguai: {
        pib: 'US$ 43,93 bilhões',
        lingua: 'Espanhol e guarani',
        fonteEconomia: 'Agricultura, pecuária, energia eólica',
        populacao: '7,28 milhões'
    },
    cuba: {
        pib: 'US$ 100,5 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Agricultura, turismo, biotecnologia e serviços',
        populacao: '11,33 milhões'
    },
    peru: {
        pib: 'US$ 240,8 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Mineração, agricultura, pesca e turismo',
        populacao: '33,69 milhões'
    },
    equador: {
        pib: 'US$ 112,1 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Petróleo, banana, camarão e flores',
        populacao: '17,64 milhões'
    },
    'república-dominicana': {
        pib: 'US$ 90,5 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Turismo, agricultura, mineração e serviços',
        populacao: '10,85 milhões'
    },
    'el-salvador': {
        pib: 'US$ 53,73 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Serviços, indústria, comércio e agricultura',
        populacao: '6,49 milhões'
    },
    uruguai: {
        pib: 'US$ 59,5 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Agricultura, pecuária, turismo e serviços',
        populacao: '3,49 milhões'
    },
    guatemala: {
        pib: 'US$ 79,6 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Agricultura, indústria, serviços e turismo',
        populacao: '18,14 milhões'
    },
    venezuela: {
        pib: 'US$ 482,4 bilhões',
        lingua: 'Espanhol',
        fonteEconomia: 'Petróleo, gás, mineração e agricultura',
        populacao: '28,52 milhões'
    }
};

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
                selectedCurrency = 'BTC';
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

const coinImages = {
    argentina: 'img-moedas/argentina_moeda.jfif',
    haiti: 'img-moedas/haiti_moeda.jfif',
    bolivia: 'img-moedas/bolivia_moeda.jfif',
    honduras: 'img-moedas/hounduras_moedas.jfif',
    brasil: 'img-moedas/brasil_moeda.jpeg',
    mexico: 'img-moedas/mexixo_moeda.jfif',
    chile: 'img-moedas/chile_moeda.jfif',
    nicaragua: 'img-moedas/nicaragua_moeda.jfif',
    colombia: 'img-moedas/colombia_moeda.jfif',
    panama: 'img-moedas/panama_moeda.jfif',
    'costa-rica': 'img-moedas/costa-rica_moeda.jfif',
    paraguai: 'img-moedas/paraguai_moeda.jfif',
    cuba: 'img-moedas/cuba_moeda.jfif',
    peru: 'img-moedas/peru_moeda.jfif',
    equador: 'img-moedas/equador_moeda.jfif',
    'república-dominicana': 'img-moedas/republica-dominicana_moeda.jfif',
    'el-salvador': 'img-moedas/el-salvador_moeda.jfif',
    uruguai: 'img-moedas/uruguai_moeda.jfif',
    guatemala: 'img-moedas/guatemala_moeda.jfif',
    venezuela: 'img-moedas/venezuela_moeda.jfif'
};

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

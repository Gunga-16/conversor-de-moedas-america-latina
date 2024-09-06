
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

const translations = {
    pt: {
        title: 'Conversor de Moedas',
        selectCountryLabel: 'Selecione o país:',
        labelReais: 'Valor em Reais:',
        convertBtn: 'Converter',
        galleryTitle: 'Galeria de Moedas',
        countryNotFound: 'Informações não encontradas para o país selecionado.'
    },
    es: {
        title: 'Convertidor de Monedas',
        selectCountryLabel: 'Seleccione el país:',
        labelReais: 'Valor en Reales:',
        convertBtn: 'Convertir',
        galleryTitle: 'Galería de Monedas',
        countryNotFound: 'Información no encontrada para el país seleccionado.'
    }
};
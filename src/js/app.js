import key from './key.js'


const ul = document.querySelector('ul');
const convertButton = document.querySelector('.convert-button');
const currencyAmount = document.querySelector('.currency-amount-input');

const fetchCurrencies = async()=>{
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/USD`);
    const data = await response.json();
    const currenciesObject = data.conversion_rates;

    renderCurencies(currenciesObject)
    
    convertButton.addEventListener('click', ()=>{
        renderCurencies(currenciesObject, Number(currencyAmount.value))
    })
    console.log(currenciesObject);
}

fetchCurrencies();


const renderCurencies = (data, amount=1)=>{
    ul.textContent = "";
    const NOKItem = document.createElement('li');
    NOKItem.textContent = `To Norwegian Krone ➡️${(amount * data.NOK).toFixed('2')}`;
    const SEKItem = document.createElement('li');
    SEKItem.textContent = `To Swedish Krone ➡️${(amount * data.SEK).toFixed('2')}`;
    const DKKItem = document.createElement('li');
    DKKItem.textContent = `To Danish Krone ➡️${(amount * data.DKK).toFixed('2')}`;
    const GBPItem = document.createElement('li');
    GBPItem.textContent = `To Great Britains Pound ➡️${(amount * data.GBP).toFixed('2')}`;
    const EURItem = document.createElement('li');
    EURItem.textContent = `To Euro ➡️${(amount * data.EUR).toFixed('2')}`;

    ul.append(NOKItem, SEKItem, DKKItem, GBPItem, EURItem)
}


// for(let key in currenciesObject){
//     const values = currenciesObject[key];
//     const newObject = {};
//     newObject[key] = values
//     currenciesArray.push(newObject)
// }


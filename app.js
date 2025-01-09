const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_itB3oVh9dZjMunduuOqOzlDstmfzHzZ1VgDxAZ9G";

const dropdownSelects = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
const msg = document.querySelector("form .msg")
const swap = document.querySelector(".swap");

for (const select of dropdownSelects) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected;"
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected;"
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

button.addEventListener("click",(evt) => {
    evt.preventDefault();
    updateExchangeRate();
})


async function finalAmount(fromcurr, tocurr, amtValue) {
    let response = await fetch(BASE_URL);
    let cntryList = (await response.json())["data"];
    let USDequiv = 0;
    for (const cntrycode in cntryList) {
        if (cntrycode === fromcurr) {
            USDequiv = amtValue / cntryList[cntrycode].value;
        }
    }
    for (const cntrycode in cntryList) {
        if (cntrycode === tocurr) {
            finalans = USDequiv * cntryList[cntrycode].value;
            return finalans;
        }
    }
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if (amtValue === "" || amtValue < 1) {
        amtValue = 1;
        amount.value = "1";
    }

    let convertedValue = await finalAmount(fromcurr.value, tocurr.value, amtValue);
    msg.innerText = `${amtValue} ${fromcurr.value} = ${convertedValue} ${tocurr.value}`
}

window.addEventListener("load",()=>{
    updateExchangeRate();
})

swap.addEventListener('click',(e)=>{
    let tempValue = fromcurr.value;
    fromcurr.value = tocurr.value; 
    tocurr.value = tempValue;      
    
   
    updateFlag(fromcurr);
    updateFlag(tocurr);
    
    
    updateExchangeRate();
})

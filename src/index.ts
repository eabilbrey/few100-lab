
import './styles.css';


// 1. find the important things you need on the page.

const tip10 = document.getElementById('tip10') as HTMLInputElement;
const tip15 = document.getElementById('tip15') as HTMLInputElement;
const tip20 = document.getElementById('tip20') as HTMLInputElement;
const tipCustom = document.getElementById('tipCustom') as HTMLInputElement;
const billTotal = document.getElementById('bill') as HTMLInputElement;
const tipChoice = document.getElementById('tipChoice') as HTMLSpanElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPercentageChosen = document.getElementById('tipPercentageChosen') as HTMLSpanElement;
const tipAmount = document.getElementById('tipAmount') as HTMLSpanElement;
const totalToBePaid = document.getElementById('totalToBePaid') as HTMLSpanElement;

const splitYes = document.getElementById('yes') as HTMLInputElement;
const splitNo = document.getElementById('no') as HTMLInputElement;
const showSplit = document.getElementById('showSplit') as HTMLDivElement;

const billSplit = document.getElementById('billSplit') as HTMLInputElement;
const splitTotalToBePaid = document.getElementById('splitTotalToBePaid') as HTMLInputElement;
const totalPerParty = document.getElementById('totalPerParty') as HTMLInputElement;


// no Invalid Characters

const invalidChar = ['+', '-', '=', 'e'];

tipCustom.addEventListener('keydown', (typed) => {
    if (invalidChar.includes(typed.key)) {
        typed.preventDefault();
    }
});

billAmount.addEventListener('keydown', (typed) => {
    if (invalidChar.includes(typed.key)) {
        typed.preventDefault();
    }
});

billSplit.addEventListener('keydown', (typed) => {
    if (invalidChar.includes(typed.key) || typed.key === '.') {
        typed.preventDefault();
    }
});

// Get Tip Value

tip10.addEventListener('click', (tip10Percent));


function tip10Percent() {
    const a = billTotal.valueAsNumber;
    const b = .1;

    const tenPercentTip = a * b;
    tipAmount.innerText = tenPercentTip.toString();

}

tip15.addEventListener('click', (tip15Percent));

function tip15Percent() {
    const a = billTotal.valueAsNumber;
    const b = .15;

    const fifteenPercentTip = a * b;
    tipAmount.innerText = fifteenPercentTip.toString();

}

tip20.addEventListener('click', (tip20Percent));

function tip20Percent() {
    const a = billTotal.valueAsNumber;
    const b = .20;

    const twentyPercentTip = a * b;
    tipAmount.innerText = twentyPercentTip.toString();

}

// NOT WORKING HALLLLP
tipCustom.addEventListener('keydown', (tipCustomPercent));


function tipCustomPercent() {
    const a = billTotal.valueAsNumber;
    const e = tipCustom.valueAsNumber;
    const f = e;

    console.log(f);

    const customPercentTip = (a * f);
    tipAmount.innerText = customPercentTip.toString();

}

// Calculate Tip function


/*function calculateTip() {
    const bill: number = billTotal.valueAsNumber;
    if (!isNaN(bill) && bill !== undefined) {
        bill = billTotal.valueAsNumber;
    } else {
        bill = 0;
    }


}*/

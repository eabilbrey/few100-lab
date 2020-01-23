
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

// Show Bill Amount



billTotal.addEventListener('input', (showBillTotal));

function showBillTotal() {

    const billAsNumber: number = billTotal.valueAsNumber;
    billAmount.innerText = billAsNumber.toString();
}

// Get Tip Value


let tipPercent: number;

tip10.addEventListener('click', () => { activateTip(10); });
tip15.addEventListener('click', () => { activateTip(15); });
tip20.addEventListener('click', () => { activateTip(20); });
tipCustom.addEventListener('input', () => { activateTip(tipCustom.valueAsNumber); });



function activateTip(amt: number) {

    tipPercent = amt * .01;
    if (amt === 10) {
        tip10.disabled = true;
        tip15.disabled = false;
        tip20.disabled = false;
        tipCustom.value = '';
    } else if (amt === 15) {
        tip10.disabled = false;
        tip15.disabled = true;
        tip20.disabled = false;
        tipCustom.value = '';
    } else if (amt === 20) {
        tip10.disabled = false;
        tip15.disabled = false;
        tip20.disabled = true;
        tipCustom.value = '';
    } else {
        tip10.disabled = false;
        tip15.disabled = false;
        tip20.disabled = false;
    }
    calculateTip();
}

function calculateTip() {
    let bill: number = billTotal.valueAsNumber;
    if (!isNaN(bill) && bill !== undefined) {
        bill = billTotal.valueAsNumber;
    } else {
        bill = 0;
    }

    const tip: number = (bill * tipPercent);
    const total: number = (bill + tip);

    tipChoice.innerText = (tipPercent * 100).toFixed();
    billAmount.innerText = bill.toFixed(2);
    tipPercentageChosen.innerText = (tipPercent * 100).toFixed();
    tipAmount.innerText = tip.toFixed(2);
    totalToBePaid.innerText = total.toFixed(2);

}













/*

tip10.addEventListener('click', (tip10Percent));


function tip10Percent() {
    const a = billTotal.valueAsNumber;
    const b = .1;

    const tenPercentTip = a * b;
    tipAmount.innerText = tenPercentTip.toString();
    tipChoice.innerText = '10';
    tipPercentageChosen.innerText = '10';

}

tip15.addEventListener('click', (tip15Percent));

function tip15Percent() {
    const a = billTotal.valueAsNumber;
    const b = .15;

    const fifteenPercentTip = a * b;
    tipAmount.innerText = fifteenPercentTip.toString();
    tipChoice.innerText = '15';
    tipPercentageChosen.innerText = '15';

}

tip20.addEventListener('click', (tip20Percent));

function tip20Percent() {
    const a = billTotal.valueAsNumber;
    const b = .20;

    const twentyPercentTip = a * b;
    tipAmount.innerText = twentyPercentTip.toString();
    tipChoice.innerText = '20';
    tipPercentageChosen.innerText = '20';

}

tipCustom.addEventListener('keyup', (tipCustomPercent));


function tipCustomPercent() {
    const a = billTotal.valueAsNumber;
    const e = tipCustom.valueAsNumber;
    const f = e * .01;

    const customPercentTip = (a * f);


    tipAmount.innerText = customPercentTip.toString();
    tipChoice.innerText = tipCustom.toString();
    tipPercentageChosen.innerText = tipCustom.toString();

}

// Calculate Bill Total

function calculateBillTotal() {

    const a = billTotal.valueAsNumber;
    const b =
}
// Split Bill
*/

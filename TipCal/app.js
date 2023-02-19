const billTotal = document.querySelector('.bill');
const tipTotal = document.querySelector('.tipRange');

tipTotal.addEventListener('change', () => {
    let Rangeresults = document.querySelector('.Tip');
    let results = document.querySelector('.results');
    Rangeresults.innerHTML = tipTotal.value

    let BilltoTip = billTotal.value * (tipTotal.value * .01)
    let TipPlusBill = parseFloat(BilltoTip) + parseFloat(billTotal.value );
    results.innerHTML = `Tip Total $${BilltoTip.toFixed(2)} <br> Bill Total $${TipPlusBill.toFixed(2)}`
    console.log(TipPlusBill)
})

billTotal.addEventListener('input', () => {
    let results = document.querySelector('.results');
    let BilltoTip = billTotal.value * (tipTotal.value * .01)
    let TipPlusBill = parseFloat(BilltoTip) + parseFloat(billTotal.value );
    results.innerHTML = `Tip Total $${BilltoTip.toFixed(2)} <br> Bill Total $${TipPlusBill.toFixed(2)}`
    console.log(TipPlusBill)
    
})



document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("billTotal");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipDisplay = document.getElementById("tipDisplay");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalWithTipInput = document.getElementById("totalWithTip");
    const currencySelect = document.getElementById("currency");
    const error = document.getElementById("error");

    const conversionRates = {
        USD: 1,
        INR: 84.07,
        JPY: 149.34,
    };

    function updateTipCalculator() {
        let billTotal = parseFloat(billTotalInput.value);
        let tipPercentage = parseFloat(tipPercentageInput.value);
        let currency = currencySelect.value;

        if (isNaN(billTotal) || billTotal <= 0) {
            error.textContent = "Please enter a valid, positive number.";
            tipAmountInput.value = "";
            totalWithTipInput.value = "";
            return;
        } else {
            error.textContent = "";
        }

        let tipAmount = (billTotal * (tipPercentage / 100)).toFixed(2);
        let totalWithTip = (parseFloat(billTotal) + parseFloat(tipAmount)).toFixed(2);

        // Convert to selected currency
        let convertedTipAmount = (tipAmount * conversionRates[currency]).toFixed(2);
        let convertedTotalWithTip = (totalWithTip * conversionRates[currency]).toFixed(2);

        // Display the tip percentage and converted values
        tipDisplay.textContent = `${tipPercentage}%`;
        tipAmountInput.value = `${convertedTipAmount}`;
        totalWithTipInput.value = `${convertedTotalWithTip}`;
    }

    billTotalInput.addEventListener("input", updateTipCalculator);
    tipPercentageInput.addEventListener("input", updateTipCalculator);
    currencySelect.addEventListener("change", updateTipCalculator);
});

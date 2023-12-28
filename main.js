function convertCurrency() {
    const inrAmount = document.getElementById("amount").valueAsNumber;

    // Assume a conversion rate (1 INR = 0.014 USD)
    const conversionRate = 0.014;

    const usdAmount = inrAmount * conversionRate;

    document.getElementById("result").innerText = `Equivalent in USD: $${usdAmount.toFixed(2)}`;
}
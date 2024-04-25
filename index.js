#!/usr/bin/env node
import inquirer from "inquirer";
const CurrencyCode = {
    USD: 1,
    EUR: 0.92,
    PKR: 278.12,
    INR: 83.32,
    GBP: 0.79,
};
inquirer
    .prompt([
    {
        name: "currency_from",
        message: "Select the currency you're converting from: ",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "GBP"],
    },
    {
        name: "currency_to",
        message: "Select the currency you're converting to: ",
        type: "list",
        choices: ["USD", "EUR", "PKR", "INR", "GBP"],
    },
    {
        name: "amount",
        message: "Enter the amount to convert: ",
        type: "number",
    },
])
    .then((answers) => {
    // convert currency
    const result = (answers.amount * CurrencyCode[answers.currency_to]) /
        CurrencyCode[answers.currency_from];
    console.log(`Your Converted Amount from ${answers.currency_from} to ${answers.currency_to} is`, result.toFixed(2), answers.currency_to);
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});

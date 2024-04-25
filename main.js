import inquirer from "inquirer";
//Initialize your balance and pin code
let myBalance = 18500;
let myPin = 13765;
console.log("Welcome To Bank Umme-Anfaal Pvt Ltd - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Kindly Entre Your 4-Digits ATM Pin Code!",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Your Pin Code is Correct!");
}
let operationAns = await inquirer.prompt({
    name: "Operation",
    type: "list",
    message: "Select any Option",
    choices: ["Withdraw Amount", "Deposit", "Check Balance", "Balance Statement"]
});
if (operationAns.Operation === "Withdraw Amount") {
    let amountAns = await inquirer.prompt({
        name: "Amount",
        type: "number",
        message: "Enter Amount You Want to Withdraw:",
    });
    if (amountAns.Amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.Amount;
        console.log(`${amountAns.Amount} Have been Withdrew Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }
}
else if (operationAns.Operation === "Check Balance") {
    console.log(`Your Account Balance is:${myBalance}`);
}

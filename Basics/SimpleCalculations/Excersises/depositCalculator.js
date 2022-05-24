function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depostiDeadline = Number(input[1]);
    let annualInterestPercent = Number(input[2]);

    let accruedInterest = depositSum * (annualInterestPercent / 100);
    let interestForOneMonth = accruedInterest/ 12;
    let result = depositSum + depostiDeadline * interestForOneMonth;
    console.log(result)

}
    depositCalculator(["200", "3", "5.7"])
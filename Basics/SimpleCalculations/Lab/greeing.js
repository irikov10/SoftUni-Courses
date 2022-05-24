function greening(input) {
    let area = Number(input[0]);
    let sum = area * 7.61
    let discount = (18 / 100) * sum
    let res = sum - discount
    console.log(`The final price is: ${res} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
    greening(["150"]) 
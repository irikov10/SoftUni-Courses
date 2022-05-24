function solve3(input) {
    let expectedSum = Number(input[0]);
    let index = 1;
    let command = input[index];
    let totalInCash = 0;
    let totalInCard = 0;
    let inCash = 0;
    let withCard = 0;
    let total = 0;

    while(command !== 'End'){
        let price = Number(input[index]);

        if(price >= 100 || price <= 10 ){
            console.log("Error in transaction!");
            withCard++;
            totalInCard += price ;
            total += price;
        }else if(price < 100 || price > 10){
            inCash++
            console.log("Product sold!");
            totalInCash += price;
            total += price;
        }

        if(total >= expectedSum){
            console.log(`Average CS: ${totalInCash/ inCash}`);
            console.log(`Average CC: ${totalInCard / withCard}`);
            break;
        }
        index++;
        command = input[index]
    }

    if(command === "End"){
        if(total < expectedSum){
            console.log("Failed to collect required money for charity.")
        }
    }
}    
solve3(["500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317"])
function everest(input){
    let index = 0;
    let command = input[index];
    let startKM = 5364
    let daysCounter = 0;
    let km = 0;
    let sum = 0;

    while(command !== "END"){
        daysCounter++
        km = Number(input[++index]);

        if(daysCounter >= 5){
            break;
        }

        if(command === "Yes"){
           
        }else if(command === "No"){
        
        }
        sum = startKM += km

        index++
        command = input[index]

        if(index >= input.length){
            break;
        }
    }

    if(sum >= 8848){
        console.log(`Goal reached for ${daysCounter} days!`)
    }else{
        console.log("Failed!")
        console.log(`${sum}`)
    }
}
everest(["Yes",
"700",
"END"])









function trainTheTrainers(input){
    let judge = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counter = 0;
    let avgGrade = 0;
    let totalSum = 0;
    let sumGrades = 0;

    while(command !== "Finish"){
        counter++
        let presentation = command;
        let grade = 0;

        for(let i = 0; i < judge; i++ ){
            index++;
            let tempGrade = Number(input[index]);
            grade += tempGrade;
        }
        avgGrade = grade / judge;
        sumGrades += avgGrade;
        console.log(`${presentation} - ${avgGrade.toFixed(2)}.`)

        index++
        command = input[index];
    }

    if(command === "Finish"){
        totalSum = sumGrades / counter;
        console.log(`Student's final assessment is ${totalSum.toFixed(2)}.`)
    }
}
trainTheTrainers(['2', 'While-Loop', '6.00', '5.50', 'For-Loop', '5.84', '5.66', 'Finish'])
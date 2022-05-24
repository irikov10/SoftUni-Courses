function graduation(input){
    let index = 0;
    let name = input[index];
    index++

    let i = 1;
    let badGrades = 0;
    let gradesSum = 0;
    let average = 0;
    let isExcluded = false;

    while(i <= 12){
        let grades = Number(input[index]);
        index++;

        if(grades < 4.00){
            badGrades++;

            if(badGrades > 1){
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        gradesSum += grades;
        i++

    }

    if(!isExcluded){
        average = gradesSum / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

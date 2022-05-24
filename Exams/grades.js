function grades(input){
    let amount = Number(input.shift());
    let gradeResult = 0;

    let moreThan5 = 0;
    let moreThan4 = 0;
    let moreThan3 = 0 ;
    let lessThan3 = 0;
    
    for(let i = 1; i <= amount; i++){
        let grade = Number(input.shift());

        if(grade >= 5){
            moreThan5++
        }else  if(grade >= 4 && grade <= 4.99){
           moreThan4++
        }else if(grade >= 3 && grade <= 3.99){
           moreThan3++
        }else{
           lessThan3++
        }
        gradeResult += grade;
    }
    let topStudents = 100 * moreThan5 / amount;
    let studentsWith4 = 100 * moreThan4 / amount;
    let studentsWith3 = 100 * moreThan3 / amount;
    let failStudents = 100 * lessThan3 / amount;

    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsWith4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsWith3.toFixed(2)}%`);
    console.log(`Fail: ${failStudents.toFixed(2)}%`);
    console.log(`Average: ${(gradeResult / amount).toFixed(2)}`);
}
grades(["10", "3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"
])
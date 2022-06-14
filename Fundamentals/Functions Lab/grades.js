function grades(grade){
    let formatedGrade = grade.toFixed(2);

    if(grade < 3.00){
        formatedGrade = 2;
        console.log(`Fail (${formatedGrade})`);
    }else if(grade < 3.50){
        console.log(`Poor (${formatedGrade})`);
    }else if(grade < 4.50){
        console.log(`Good (${formatedGrade})`);
    }else if(grade < 5.50){
        console.log(`Very good (${formatedGrade})`);
    }else if(grade >= 5.50){
        console.log(`Excellent (${formatedGrade})`);
    }
}
grades(2.99)
grades(3.50)
grades(3.00)
grades(4.50)

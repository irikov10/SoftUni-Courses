function examPreparation(input) {
    let badGradesLimit = Number(input.shift());

    let index = 6
    let badGradesCount = 0;
    let avgGrade = 0;
    let gradesCounter = 0;
    let totalSumOfGrades = 0;
    let lastproblemSolved = input[index];


    while (badGradesCount < badGradesLimit) {
        let nameOfExcersise = input.shift()
        let grade = Number(input.shift());

        if (nameOfExcersise === "Enough") {
            avgGrade = totalSumOfGrades / gradesCounter;

            console.log(`Average score: ${avgGrade.toFixed(2)}`);
            console.log(`Number of problems: ${gradesCounter}`);
            console.log(`Last problem: ${lastproblemSolved}`);

            break;
        }

        if (grade <= 4) {
            badGradesCount++
        } 

        totalSumOfGrades += grade;
        gradesCounter++;
        lastProblem = nameOfExcersise;
    }

    if (badGradesCount == badGradesLimit) {
        console.log(`You need a break, ${badGradesCount} poor grades.`)
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


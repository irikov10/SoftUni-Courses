function importantLiterature(input) {
    let pagesInTheLatestBook = Number(input[0]);
    let amountOfPagesReadForAnHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let totalTimeToRead = pagesInTheLatestBook / amountOfPagesReadForAnHour;
    let neededTimeForOneDay = totalTimeToRead /  daysToRead;
    console.log(neededTimeForOneDay)
}
    importantLiterature(["212", "20", "2"])
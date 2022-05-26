function requiredReading(pages, pagesRead, days){
    let totalTime = pages / pagesRead;
    let requiredHours = totalTime / days;
    console.log(requiredHours)
}
requiredReading(212, 20, 2)
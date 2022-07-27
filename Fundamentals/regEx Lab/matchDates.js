function matchDates(arr) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z]{1}[a-z]{1,})\2(?<year>[0-9]+)\b/g;
    let validDate;

    while((validDate = pattern.exec(arr)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
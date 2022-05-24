function oldBooks(input){
    let bookName = input[0];
    let index = 1;
    let command = input[index];
    let bookIsFound = false;

    while(command !== "No More Books"){
        command = input[index]
        if(command === bookName){
            bookIsFound = true;
            break;
        }
        command = input[index];
        index++
    }

    if(bookIsFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 2} books.`)
    }else{
        console.log(`You checked ${index - 1} books and found it.`)
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


function password(input){
    let index = 1;
    let username = input[0];
    let password = input[index];
    index++

    let temporaryPass = input[index];
    index++

    while(temporaryPass !== password){
        temporaryPass = input[index];
        index++
    }
    console.log(`Welcome ${username}!`);
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])

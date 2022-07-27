function schoolGrades(arr){
    let map = new Map();

    for(let el of arr){
        let tokens = el.split(" ");
        let name = tokens.shift();
        let setOfGrades = tokens
        
        if(map.has(name)){
            let oldSet = map.get(name);

            for(let grade of setOfGrades){
                oldSet.push(grade)
            }

            map.set(name, oldSet);
        } else {
            map.set(name, setOfGrades);
        }
    }

    let sortEntries = Array.from(map.entries()).sort(([keyA],[keyB]) => {
        return keyA.localeCompare(keyB)
    })     

    for(let [key,value] of sortEntries){
        let sum = 0;

        for(let grade of value){
            sum += Number(grade)
        }
        let avg = sum / value.length;
        console.log(`${key}: ${avg.toFixed(2)}`)
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)
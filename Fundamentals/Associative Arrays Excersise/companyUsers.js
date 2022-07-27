function companyUsers(arr) {
    //Write a function, which keeps the information about companies and their employees. 
    //array which contains companies names and their employees' id
    //task: add each employee to their company, but the company can't have two employees with the same id
    //sort by ascending order

    let info = {};

    for (let el of arr) {
        let [companyName, employeeId] = el.split(' -> ');

        if(!info.hasOwnProperty(companyName)){
            info[companyName] = [];
        } 

        info[companyName].push(employeeId);
    }
    
    let sortedInfo = Object.entries(info).sort((a,b) => a[0].localeCompare(b[0]));

    for(let el of sortedInfo){
        console.log(el[0]);
        
        let id = new Set(el[1]);

        for(let i of id){
            console.log(`-- ${i}`)
        }
    }
}
companyUsers(['SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111'
])
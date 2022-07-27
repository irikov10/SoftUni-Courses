function meetings(arr){
    let appointments = {};

    for(let el of arr){
        let [weekday, name] = el.split(' ');

        if(!appointments.hasOwnProperty(weekday)){
            appointments[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }else {
            console.log(`Conflict on ${weekday}!`)
        }
    }
   
    for (let [key, value] of Object.entries(appointments)){
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)
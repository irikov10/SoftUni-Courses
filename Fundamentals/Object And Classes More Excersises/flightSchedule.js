function flightSchedule(matrix){
    let fligths = [];
    let sector = matrix.shift();
    let flightStatus = matrix.shift();
    let status = matrix.shift();

    for(let el of sector){
        let [flightNumber, city] = el.split(' ');
        let flight = {
            flightNumber,
            city
        };
        fligths.push(flight);
    }

    for(let status of flightStatus){
        let [number, statusOfCurrentflight] = status.split(' ');

        fligths.forEach(el => {
            if(el.number === number){
                flight.statusOfCurrentflight = statusOfCurrentflight;
            }
        })
    }

    if(status === 'Ready to fly'){
        fligths.forEach(el => {
            if(!el.statusOfCurrentflight){
                console.log(`Destination: ${el.city}, Status: ${el.statusOfCurrentflight}`)
            }
        })
    }else {
        fligths.forEach(el => {
            if(el.statusOfCurrentflight){
                console.log(`Destination: ${el.city}, Status: ${el.statusOfCurrentflight}`)
            }
        })
    }

}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)
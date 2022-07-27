function piccolo(arr) {
    let parking = new Set();

    for (let el of arr) {
        let [command, carNumber] = el.split(', ');
        switch (command) {
            case 'IN':
                parking.add(carNumber);
                break;
            case 'OUT':
                parking.delete(carNumber);
                break;
        }
    }
    let sorted = Array.from(parking).sort();
    
    if(parking.size === 0){
        console.log("Parking Lot is Empty");
    }else {
        console.log(sorted.join('\n'));
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
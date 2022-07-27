function race(arr) {
    let map = new Map();
    let names = arr.shift().split(', ');
    let letters = /[A-Za-z]+/g;
    let digits = /\d/g;

    names.forEach(person => {
        map.set(person, 0);
    })

    for(let index = 0; index < arr.length; index++) {
        let currentLine = arr[index];

        if(currentLine === 'end of race') {
            break;
        }

        let name = currentLine.match(letters).join('');
        let distance = currentLine.match(digits).reduce((a,b) => {
            return Number(a) + Number(b);
        })

        if(map.has(name)) {
            let previousDistance = map.get(name);

            distance += previousDistance;
            map.set(name, distance);
        }
    }

    let top3 = Array.from(map).sort((a,b) => b[1] - a[1]);
    console.log(`1st place: ${top3[0][0]}`);
    console.log(`2nd place: ${top3[1][0]}`);
    console.log(`3rd place: ${top3[2][0]}`);
} 
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)
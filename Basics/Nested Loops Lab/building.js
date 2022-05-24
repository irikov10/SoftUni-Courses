function building(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floor; i > 0; i--) {
        let buff = ""
        for (let r = 0; r < rooms; r++) {
            if (i === floor) {
                buff += "L" + i + r + " ";
            } else if (i % 2 === 0) {
                buff += "O" + i + r + " ";
            } else {
                buff += "A" + i + r + " ";
            }
        }
        console.log(buff);
    }
}
building(["4", "4"])
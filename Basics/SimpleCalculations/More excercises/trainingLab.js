function trainingLab(input){

    let length = Number(input[0]);
    let weigth = Number(input[1]);
    
    let lengthCentimeters = length * 100;
    let weigthCentimeters = (weigth * 100) - 100;
    let tRows = weigthCentimeters / 70; 
    let sRows = lengthCentimeters / 120;

    let tRowsDiff = Math.abs(Math.floor(weigthCentimeters - (weigthCentimeters - tRows)));
    let sRowsDiff = Math.abs(Math.floor(lengthCentimeters - (lengthCentimeters - sRows)));
    let seats = (tRowsDiff * sRowsDiff) - 3;
    console.log(seats);
}
    trainingLab(["15", "8.9"])
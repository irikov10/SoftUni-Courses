function circleAreaAndPerimeter(input){
    let r = Number(input[0]);

    let perimeter = 2 * Math.PI * r;
    let area = Math.PI * r * r;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
    circleAreaAndPerimeter("3")
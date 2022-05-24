function housePainting(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    
    let sideWall = x * y;
    
    let windowsize = 1.5
    let window  = windowsize * windowsize;
    let bothSides = 2 * sideWall - 2 * window;
    let backSide = x * x; 
    let backAndFrontSide = 2 * backSide - 2.4;
    let totalArea = backAndFrontSide + bothSides
    let greenPaint = totalArea / 3.4;
    console.log(greenPaint.toFixed(2));
    
    let rectangle = 2 * (x * y);
    let triangle = 2 * (x * h / 2);
    let totalA = rectangle + triangle;
    let redPaint = totalA / 4.3;
    console.log(redPaint.toFixed(2));
}
    housePainting(["6", "10", "5.2"])
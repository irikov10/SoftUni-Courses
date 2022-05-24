function numberPyramid(input){
    let n = Number(input[0]);

    let current = 1;
    let isBiggerThanN = false;
    let str = "";
    for(let rows = 1; rows <= n; rows++){
        for(let columns = 1; columns <= rows; columns++){
            if(current > n){
                isBiggerThanN = true;
                break;
            }
            str += current + " ";
            current++;
        }
        console.log(str)
        str = ""

        if(isBiggerThanN){
            break;
        }
    }
}
numberPyramid(["7"])
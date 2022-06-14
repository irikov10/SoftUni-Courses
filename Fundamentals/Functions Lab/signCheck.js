function signCheck(numOne, numTwo, numThree){
    let desc = "";

    if(numOne < 0 & numTwo < 0 & numThree < 0){
        desc = "Negative";
    }else if(numOne < 0 & numTwo < 0 & numThree > 0){
        desc = "Positive";
    }else if (numOne > 0 && numTwo > 0 && numThree < 0){
        desc = "Negative";
    }else if(numOne < 0 && numTwo > 0 && numThree > 0){
        desc = "Negative";
    }else if(numOne > 0 && numTwo < 0 && numThree > 0){
        desc = "Negative";
    }else if(numOne > 0 && numTwo > 0 && numThree > 0){
        desc = "Positive"
    }else if(numOne > 0 & numTwo < 0 & numThree < 0){
        desc = "Positive"
    }

    console.log(desc)
}
signCheck( -5,
    1,
    1
   )
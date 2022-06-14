function passwordValidator(pass){
    function isBetweenSixAndTen(string){
        if(string.length >= 6 && string.length <= 10){
            return true
        }else {
            return false;
        }
    }


    function consistsOnlyOfLettersAndDigits(string){
        for(let char of string){
            let charCode = char.charCodeAt(0);

            if(!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)){
                return false
            }
        }

        return true
    }


    function containsAtLeastTwoDigits(string){
        let counter = 0;

        for(let char of string){
            let charCode = char.charCodeAt(0);

            if(charCode >= 48 && charCode <= 57){
                counter++;
            }
        }

        if(counter >= 2){
            return true
        }else {
            return false
        }
    }


    let isValidLength = isBetweenSixAndTen(pass);
    let onlyOfLettersAndDigits = consistsOnlyOfLettersAndDigits(pass);
    let atLeastTwoDigits = containsAtLeastTwoDigits(pass);

    if(isValidLength && onlyOfLettersAndDigits && atLeastTwoDigits){
        console.log('Password is valid');
    }

    if(!isValidLength){
        console.log("Password must be between 6 and 10 characters");
    }

    if(!onlyOfLettersAndDigits){
        console.log("Password must consist only of letters and digits");
    }

    if(!atLeastTwoDigits){
        console.log("Password must have at least 2 digits")
    }

}
passwordValidator('logIn')
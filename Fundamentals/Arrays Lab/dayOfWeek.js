function dayOfWeek(num){

    if(num < 1 || num > 7){
        console.log("Invalid day!");
    }else{
        let day = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
        console.log(day[num-1])
    }
}
dayOfWeek(1)
dayOfWeek(3)
dayOfWeek(7)
dayOfWeek(-1)
dayOfWeek(16)

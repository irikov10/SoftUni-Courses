function walking(input){
    let index = 0;
    let target = 10000;
    let command = input[index];
    let steps = 0;
    let totalSteps = 0;

    while(command !== "Going home"){
        steps = Number(command);
        totalSteps += steps;

        if(totalSteps >= target){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - target} steps over the goal!`);
            break;
        }
        index++
        command = input[index];
        
    }

    if(command === "Going home"){
        let stepsToHome = Number(input[index + 1]);
        totalSteps += stepsToHome;

        if(totalSteps >= target){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - target} steps over the goal!`);
        }else{
            console.log(`${target - totalSteps} more steps to reach goal.`)
        }
    }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"])
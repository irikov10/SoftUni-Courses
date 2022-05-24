function hospital(input){
    let period = Number(input[0]);

    let curedPatients = 0;
    let uncuredPatients = 0;
    let doctors = 7;

    for(i = 1; i <= period; i++){
      
        let patients = Number(input[i]);

        if(i % 3 === 0 && uncuredPatients > curedPatients){
            doctors++
        }

        if(patients <= doctors){
            curedPatients += patients
        } else {
            curedPatients += doctors;
            uncuredPatients += patients - doctors;
        }
    }

    console.log(`Treated patients: ${curedPatients}.`);
    console.log(`Untreated patients: ${uncuredPatients}.`);

}
hospital(['4','7','27', '9','1'])
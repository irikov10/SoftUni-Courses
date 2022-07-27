function makeADictionary(arrInJSONForm){
    let dictionary = [];
    arrInJSONForm.forEach(el => {
        let parsed = JSON.parse(el)
        dictionary.push(parsed);
    })

    dictionary.sort((a,b) => {
        if(Object.keys(a)[0]  > Object.keys(b)[0]){
            return 1;
          } 
          if(Object.keys(a)[0] < Object.keys(b)[0]){
            return -1;
          } 
          if(Object.keys(a)[0] === Object.keys(b)[0]){
       
          }
    });


    for(let el of dictionary){
        let term = Object.keys(el).join();
        let description = el[term];
        console.log(`Term: ${term} => Definition: ${description}`)
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )
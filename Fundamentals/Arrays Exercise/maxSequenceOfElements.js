function maxSequenceOfElements(arr){
    let maxSequence = [];

    for(let i = 0; i < arr.length; i++){
        let sequence = [];
        for(let j = i; j < arr.length; j++){

            if(arr[i] === arr[j]){
                sequence.push(arr[i]);
            }else {
                break;
            }
        }

        if(sequence.length > maxSequence.length){
            maxSequence = sequence;
        }
    }
    console.log(maxSequence.join(' '));
}
maxSequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
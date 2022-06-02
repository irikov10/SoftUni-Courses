function reverseInPlace(arr){

    let l = arr.length - 1; // length
    for (let i = 0; i < arr.length / 2; i++, l-- ) {
        let temp = arr[i];
        arr[i] = arr[l];
        arr[l] = temp;
    }

    console.log(arr.join(" "))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
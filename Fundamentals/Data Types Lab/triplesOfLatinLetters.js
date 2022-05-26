// //function triplesOfLatinLetters(num){
//     let buff = "";
//     let strA = ' a';
//     let strB = ' b';
//     let strC = ' c';
//     for(let i = 0; i <= num; i++){
//         buff+= strA;
//         for(let j = 0; j <= num; j++){
//             buff+= strB;
//             for(let k = 0; k <= num; k++){
//                 buff += strC;
//             }
//         }
//     }
//     console.log(buff)
// }
// triplesOfLatinLetters('3')


function something(num){
    let buff = "";
    for(let a = 0; a <= num; a++){
        let i = String.fromCharCode(a + 97);
        for(let b = a; b <= num; b++){
            let j = String.fromCharCode(b + 97);
            for(c = b; c <= num; c++){
            let k = String.fromCharCode(c + 97);
                buff = `${i}${j}${k}`;
               
                console.log(buff)
            }
        }
    }
}
something(3)
// function trippleLetters(n) {
//     for(let i = 0; i < n; i++){
//         let firstLetter = String.fromCharCode(i + 97);
//         for(let j = 0; j < n; j++){
//             let secondLetter = String.fromCharCode(j + 97);
//             for(let k = 0; k < n; k++){
//                 let thirdLetter = String.fromCharCode(k + 97);
//                 console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
//             }
//         }
//     }
// }
// trippleLetters('3')
function loadingBar(num){
    let percentage = '%'.repeat(num / 10);
    let dots = '.'.repeat(10 - percentage.length);

    if(dots === 0){
        console.log('100% Complete!');
    }else {
        console.log(`${num}% [${percentage}${dots}]`);
        console.log('Still loading...')
    }
}
loadingBar(30)
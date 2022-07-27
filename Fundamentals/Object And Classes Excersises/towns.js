function towns(arr){
    let city = {};
    
    arr.forEach(el =>{
        let [name, latitude, longitude] = el.split(' | ');
        city.town = name;
        city.latitude = Number(latitude).toFixed(2);
        city.longitude = Number(longitude).toFixed(2);

        console.log(city);
    })
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)

console.log(`--------------------------------------------------------`)

towns(['Plovdiv | 136.45 | 812.575'])
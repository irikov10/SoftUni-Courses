function movieRatings(input) {
        let numberFilmsFromDesi = Number(input[0]);
        let index = 1;
     
        let maxRating = Number.MIN_SAFE_INTEGER;
        let maxRatingTitle = "";
     
        let minRating = Number.MAX_SAFE_INTEGER;
        let minRatingTitle = "";
     
        let avgRaiting = 0;
     
        for (i = 0; i < numberFilmsFromDesi; i++) {
            let nameOfTheFilm = input[index++];
            let raitingOfFilm = Number(input[index++]);
     
            if (raitingOfFilm > maxRating) {
                maxRating = raitingOfFilm;
                maxRatingTitle = nameOfTheFilm;
            }
     
            if (raitingOfFilm < minRating) {
                minRating = raitingOfFilm;
                minRatingTitle = nameOfTheFilm;
            }
            avgRaiting += raitingOfFilm;
        } 
     
    let average = avgRaiting / numberFilmsFromDesi;
     
    console.log(`${maxRatingTitle} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingTitle} is with lowest rating: ${minRating}`);
    console.log(`Average rating: ${average}`)
}
movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"])
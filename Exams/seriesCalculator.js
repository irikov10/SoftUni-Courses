function seriesCalculator(input){
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let continuation = Number(input[3]);

    let time = continuation * 0.20;
    let ads = continuation + time;
    let lastEpisode = seasons * 10;
    let sum = ads * episodes * seasons + lastEpisode;

    console.log(`Total time needed to watch the ${name} series is ${sum} minutes.`)
}
seriesCalculator(["Riverdale",
"3",
"21",
"45"])

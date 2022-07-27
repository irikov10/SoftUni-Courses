function cardGame(arr) {
    let map = new Map();

    let powerOfCards = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    let typeOfCard = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }

    for (let elements of arr) {
        let [name, cardSet] = elements.split(': ');
        let cardSetAsArray = cardSet.split(', ');

        if (!map.has(name)) {
            map.set(name, new Set);
        }

        for (let card of cardSetAsArray) {
            map.get(name).add(card)
        }
    }

    for (let [key, value] of map) {
        let sum = 0;

        for (let card of value) {
            let cardInfo = card.split('');
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('');

            sum += powerOfCards[cardPower] * typeOfCard[cardType];
        }

        console.log(`${key}: ${sum}`)
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)
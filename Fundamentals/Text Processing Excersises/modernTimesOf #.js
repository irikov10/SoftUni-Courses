function modernTimesOfHashtag(string) {
    let elementsInString = string.split(' ');

    for (let el of elementsInString) {

        if (el.startsWith('#') && el.length > 1) {
            let isTrue = true;
            let lowerWord = el.toLowerCase();

            for (let i = 1; i < lowerWord.length; i++) {
                if (lowerWord.charCodeAt(i) < 97 || lowerWord.charCodeAt(i) > 122) {
                    isTrue = false;
                    break;
                }
            }

            if(isTrue) {
                console.log(el.split('#').join(' '))
            }
        }
    }
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')
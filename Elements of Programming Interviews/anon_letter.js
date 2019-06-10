function anonLetter(letter, mag) {
    let letterHash = {};
    let magHash = {};
    for (let i = 0; i < letter.length; i++) {
        if (letterHash[letter[i]]) {
            letterHash[letter[i]]++;
        } else {
            letterHash[letter[i]] = 1;
        }
    }

    // for (let i = 0; i < mag.length; i++) {
    //     if (letterHash[mag[i]]) {
    //         letterHash[mag[i]]--;
    //     }
    // }

    for (let i = 0; i < mag.length; i++) {
        if (magHash[mag[i]]) {
            magHash[mag[i]]++;
        } else {
            magHash[mag[i]] = 1;
        }
    }



    let letChars = Object.keys(letterHash);
    for (let i = 0; i < letChars.length; i++) {
        if (!magHash[letChars[i]] || letterHash[letChars[i]] > magHash[letChars[i]]) {
            return false;
        }
    }
    return true;
}

const letter = "KILL";
const mag = "KISS ALL";

console.log(anonLetter(letter, mag));
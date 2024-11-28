const vocals = ["a","e","i","o","u"];
let count = 0;
const word = process.argv[2];

for (let i = 0; i < word.length; i++) {
    if (vocals.includes(word[i].toLowerCase())) {
        count++;
    }
};
console.log(count);
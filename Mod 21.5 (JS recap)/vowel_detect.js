function solution(letter) {
    var lowercaseLetter = letter.toLowerCase();

    if (lowercaseLetter === 'a' || lowercaseLetter === 'e' || lowercaseLetter === 'i' || lowercaseLetter === 'o' || lowercaseLetter === 'u') {
        return 'VOWEL';
    } else if (lowercaseLetter === 'y') {
        return 'It depends on the context.';
    } else {
        return 'CONSONANT';
    }
}
console.log(solution('a')); // Output: VOWEL
console.log(solution('u')); // Output: VOWEL
console.log(solution('k')); // Output: CONSONANT

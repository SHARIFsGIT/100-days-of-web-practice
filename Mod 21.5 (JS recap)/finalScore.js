function finalScore(scores) {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    return totalScore;
}
const inputScores = [20, 13, 37];
const sumScore = finalScore(inputScores);
console.log(sumScore);

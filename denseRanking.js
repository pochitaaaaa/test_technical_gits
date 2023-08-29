function denseRanking(scores, gitsScores) {
    const uniqueScores = [...new Set([...scores, ...gitsScores])];
    uniqueScores.sort((a, b) => b - a);

    const rankings = {};
    uniqueScores.forEach((score, index) => {
        rankings[score] = index + 1;
    });

    const result = gitsScores.map(score => rankings[score]);
    return result;
}

let inputScores = ''; 
let inputGitsScores = '';
let output = [];


inputScores = '100,80,80,70';
inputGitsScores = '60,70,100';

if (inputScores && inputGitsScores) {
    const inputScoresArray = inputScores.split(',').map(Number);
    const inputGitsScoresArray = inputGitsScores.split(',').map(Number);

    output = denseRanking(inputScoresArray, inputGitsScoresArray);
}

console.log('Input Scores:', inputScores);
console.log('Input Gits Scores:', inputGitsScores);
console.log('Output:', output.toString());

function tournamentWinner(competitions, results) {
    let map = new Map();
    for (let i = 0; i < competitions.length; i++) {
        let teams = competitions[i];
        let winner = teams[0];
        if (results[i] === 0) {
            winner = teams[1];
        }
       
        const points = map.get(winner) ?? 0;
        map.set(winner, points + 3);
    }
    let maxPoints = 0;
    let winnerTeam = '';

    for (let entrie of map) {
        if (entrie[1] > maxPoints) {
            maxPoints = entrie[1];
            winnerTeam = entrie[0];
        }
    }
    return winnerTeam;
}

console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["HTML", "Python"]], [0, 0, 0]));
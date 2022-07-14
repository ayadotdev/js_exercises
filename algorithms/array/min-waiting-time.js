function minimumWaitingTime(queries) {
    sortedQueries = queries.sort((a,b) => a - b);
    console.log(sortedQueries);
    let minTime = 0;

    for (let i = 1; i < sortedQueries.length; i++){
        let queriesLeft = sortedQueries.length - i;
        minTime += sortedQueries[i - 1] * queriesLeft;

    }
    return minTime;
}

console.log(minimumWaitingTime([3,2,1,2,6]));

//O(n log n) time/ O(1) space
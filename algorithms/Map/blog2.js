const blogInfo =
    [{
        "user": "Marco",
        "article": "art of stealing"
    },
    {
        "user": "Aya",
        "article": "eating good"
    },
    {
        "user": "Misha",
        "article": "eating good"
    },
    {
        "user": "Natasha",
        "article": "learning to love"
    },
    {
        "user": "Aureliano",
        "article": "eating good"
    }]

function returnArticleAndUsers() {
    let articleAndUsers = new Map();
    blogInfo.forEach(item => {
        let article = item.article;
        let user = item.user;
        if (!articleAndUsers.has(article)) {
            articleAndUsers.set(article, [user])
        }
        else {
            let currentArr = articleAndUsers.get(article);
            currentArr.push(user)
            articleAndUsers.set(article, currentArr);
        }

    })

    let longestUsersArrLength = 0;
    let result = [];

    for (let [article, users] of articleAndUsers) {
        if (users.length > longestUsersArrLength) {
            longestUsersArrLength = users.length;
            result = []; //clear the array
            result.push(article);
            result.push(users);
        }
    }
    return result;
}

console.log(returnArticleAndUsers(blogInfo));
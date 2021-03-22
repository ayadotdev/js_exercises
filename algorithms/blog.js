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
    let articles = new Map();
    let output = [];
    blogInfo.forEach(item => {
        let article = item.article;
        if (!articles.has(article)) {
            articles.set(article, 1)
        }
        else {
            const currentValue = articles.get(article);// Map.get(key) => value
            articles.set(article, currentValue + 1);
        }
    })

    let theMostOcc = 0;
    let theMostReadArt = "";
    let usersReadThatArt = [];


    for (let [key, value] of articles) {
        if (value > theMostOcc) {
            theMostOcc = value;
            theMostReadArt = key;
        }
    }

  blogInfo.forEach(item => {
        let article = item.article;
        let user = item.user;
        if(article === theMostReadArt){
            usersReadThatArt.push(user);
        }

        
    })


   output.push(theMostReadArt, usersReadThatArt);


    return output;
}

console.log(returnArticleAndUsers(blogInfo));
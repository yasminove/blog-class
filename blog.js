class Person {
    firstName; 
    lastName;
}

class Author extends Person {
    constructor(articles, activity){
        this.articles = articles;
        this.activity = activity;
    }
    salary;
}

Author.articles = 7;
Author.salary = 7544;

console.log(Author.salary);

class Reader extends Person {
    constructor(interaction){
        this.interaction = interaction;
    }
}

Reader.interaction = 'Good'

console.log(Reader.interaction);

class Article {
    genre; 
    wordCount; 
}

Article.genre = 'Literature';
console.log(Article.genre );


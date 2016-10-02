var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "The Matrix",
        review: "The ultimate action movie"
    }
];


//display the movies
for (var i = 0; i < movies.length; i++){
    textSize(20);
    fill(84, 140, 209);
    //first object
    textAlign(CENTER, CENTER);
    textSize(20);
    text(movies[i].title, 200, 50 + i * 100);
    textSize(10);
    text(movies[i].review, 200, 80 + i * 100);

}

var model = new WordCloud.WordCloud();
var words = ["test", "application", "cool!", "wordcloud", "test", "javascript", "typescript"].map(function(word) {
    return [word, Math.floor(Math.random() * 50) + 10];
});
model.words = words;
model.render(document.getElementById("wordcloud-container"));

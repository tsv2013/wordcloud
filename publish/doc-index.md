# Wordcloud Widget Model Classes and Objects
It is JavaScript (TypeScript) Wordcloud library.

Please select class in the right navigation panel to explore properties and methods of a corresponding model class.

## Getting started with Wordcloud

### Pure JS - non-modular web application

Add the following scripts to HEAD part of your HTML file
```HTML
<script src="https://unpkg.com/wordcloud-light"></script>
<link href="https://unpkg.com/wordcloud-light/wordcloud.css" rel="stylesheet">
```

Add the following markup to BODY part of your HTML file - where you want to see a table
```HTML
<div id="wordcloud-container" style="height: calc(100vh - 16px);"></div>
```

Add the following script to make it work
```JS
var model = new WordCloud.WordCloud();
var words = ["test", "application", "cool!", "wordcloud", "test", "javascript", "typescript"].map(function(word) {
    return [word, Math.floor(Math.random() * 50) + 10];
});
model.words = words;
model.render(document.getElementById("wordcloud-container"));
```

Here is the wordcloud [live example with the above code](https://plnkr.co/edit/wBrB0EznDixVV1ra?open=lib%2Fscript.js&preview)

### Pure JavaScript

Please check [wordcloud](https://www.npmjs.com/package/wordcloud-light) package readme file

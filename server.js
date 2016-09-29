var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var aricles = {
    articleOne: {
        title: 'aritcle-one',
        heading: 'Article One',
        content: `<p> Follow this and you'll learn and acheive more </p> `,
    },
    articleTwo: {
        title: 'aritcle-two',
        heading: 'Article Two',
        content: `<p> Follow this and you'll learn and acheive more</p>`,
    },
    articleThree: {
        title: 'aritcle-one',
        heading: 'Article Three',
        content: `<p> Follow this and you'll learn and acheive more</p>`,
    }
}

var htmlCode = function(data) {
    var html = 
    `<html>
        
    <head>
        <title>
            ${title}
        </title>
        <meta name = "viewport" content = "width = device - width, initial - scale = 1"/>
        
    </head>
    
    <body>
        <h1 class="heading">${heading}</h1>
        
        ${content}
        
    </body>
    
    </html>`;
    return html;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(htmlCode(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

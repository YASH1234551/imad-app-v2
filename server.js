var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one':{
    title:'ARTICLE ONE| Yash Mittal',
    heading:'Article one',
    date:'11 feb ,2017',
    content:
    `<p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p>
        <p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p>
        <p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p> `
    },
    'article-two':{
    title:'ARTICLE Two| Yash Mittal',
    heading:'Article two',
    date:'12 feb ,2017',
    content:
    `<p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p>
        <p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p>
        <p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p> `
    },
    'article-three':{
    title:'ARTICLE three| Yash Mittal',
    heading:'Article three',
    date:'13 feb ,2017',
    content:
    `<p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p>
        <p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p>
        <p>
            hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .hello this is yash how are you .
        </p> `
    },
};
function createTemplate (data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=
    
          `<html>
      <head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>`
    ;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
   var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get('/submit-name:name', function (req, res) {
   var name=req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

// DONE: Instead of a global `articles = []` array, let's track this list of all articles directly on
// Article <-- the **constructor function**. Note: ".all" is NOT on the prototype. In JS, functions are
// objects; you can add properties to any function, at any time. In this app, we have an array of Article
// objects that we want to build; that array does not belong in Article.prototype since that array is
// "larger" than any single Article.
Article.all = [];

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

// DONE: There are some other functions that also relate to articles across the board, rather than
// just single instances. Object-oriented programming would call these "class-level" functions,
// that are relevant to the entire "class" of objects that are Articles.

// DONE: This function will take the rawData, how ever it is provided,
// and use it to instantiate all the articles. This code is moved from elsewhere, and
// encapsulated in a simply-named function for clarity.
Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  });
};

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Article.fetchAll = function() {
  var jqXHR = $.ajax({
    method: 'HEAD',
    url: 'data/hackerIpsum.json',
    success: function () {
      var remoteeTag = jqXHR.getResponseHeader('ETag');
      console.log('local eTag established.');
      if (localStorage.rawData && localStorage.eTag === JSON.stringify(remoteeTag)) {
        console.log('loading from localStorage');
        // When rawData is already in localStorage,
        // we can load it by calling the .loadAll function,
        // and then render the index page (using the proper method on the articleView object).
        Article.loadAll(JSON.parse(localStorage.getItem('rawData'))//DONE: What do we pass in here to the .loadAll function?
      );
        articleView.initIndexPage(); //DONE: Change this fake method call to the correct one that will render the index page.
      } else {
        console.log('loading from JSON');
      // DONE: When we don't already have the rawData in local storage, we need to get it from the JSON file,
      //       which simulates data on a remote server. Run live-server or pushstate-server!
      //       Please do NOT browse to your HTML file(s) using a "file:///" link. RUN A SERVER INSTEAD!!

      // 1. Retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
        $.getJSON('data/hackerIpsum.json', function(data) {
        // 2. Store the resulting JSON data with the .loadAll method,
          Article.loadAll(data);
        // 3. Cache the data in localStorage so next time we won't enter this "else" block (avoids hitting the server),
          localStorage.setItem('rawData', JSON.stringify(data));
        // 3.5 Get and store article file eTag
          // localStorage.setItem('eTag', <.ajaxFetchETAG> );
          ajaxTest();
        // 4. Render the index page (perhaps with an articleView method?).
          articleView.initIndexPage();
        });
      }
    }
  });
};

function ajaxTest() {
  var jqXHR = $.ajax({
    method: 'HEAD',
    url: 'data/hackerIpsum.json',
    success: function () {
      console.log(jqXHR.getResponseHeader('ETag'));
      localStorage.setItem('eTag', JSON.stringify(jqXHR.getResponseHeader('ETag')));
    }
  });
};

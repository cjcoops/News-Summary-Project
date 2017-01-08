// Understands how to display a list of stories.

"use strict";

(function(exports) {
  function NewsListView(listElement, newsList) {
    this.listElement = listElement;
    this.newsList = newsList;
  };

  NewsListView.prototype = {
    display: function() {
      var html = "<ul>"
      for (var i = 0; i < this.newsList.stories.length; i++) {
        html += "<li>" + this.newsList.getHeadline(i) + "</li>"
      }
      this.listElement.innerHTML = html + "</ul>";
    }
  };

  exports.NewsListView = NewsListView;
})(this);

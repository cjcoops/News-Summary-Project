// Understands how to display a list of stories.

"use strict";

(function(exports) {
  function NewsListView(listElement, newsList) {
    this.listElement = listElement;
    this.newsList = newsList;
  };

  NewsListView.prototype = {
    display: function() {
      var html = ""
      for (var i = 0; i < this.newsList.stories.length; i++) {
        html += this.newsList.getHeadline(i)
      }
      this.listElement.innerHTML = html;
    }
  };

  exports.NewsListView = NewsListView;
})(this);

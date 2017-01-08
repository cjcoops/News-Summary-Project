"use strict";

(function(exports) {
  function NewsListModel(stories) {
    this.stories = stories;
  }

  NewsListModel.prototype = {
    getHeadline: function(index) {
      return this.stories[index].webTitle;
    },

    getUrl: function(index) {
      return this.stories[index].webUrl;
    }

  }

  exports.NewsListModel = NewsListModel

})(this)

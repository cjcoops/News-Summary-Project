"use strict";

(function(exports) {
  function NewsListController(app, newsListModel, newsListView) {
    this.app = app;
    this.newsListModel = new NewsListModel(mockResponseObject.response.results)
    this.newsListView = new NewsListView(this.app, this.newsListModel)
  }

  NewsListController.prototype = {
    updateListView: function() {
      this.newsListView.display();
    }

  }

  exports.NewsListController = NewsListController

})(this)

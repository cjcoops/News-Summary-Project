"use strict";

(function() {
  window.addEventListener("load", function() {
    var app = document.getElementById("app");
    var controller = new NewsListController(app)
    controller.updateListView()
  });
})();

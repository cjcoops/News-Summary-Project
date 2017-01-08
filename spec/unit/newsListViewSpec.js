"use strict";

var mockStories = mockResponseObjectShort.response.results;
var listDivMock = {}
var list = new NewsListModel(mockStories)
var view = new NewsListView(listDivMock, list);

(function testListViewInstantiatedWithPageElement() {
  view.display()
  assert.isTrue("View instantiated with list element",
    view instanceof NewsListView);
})();

(function testSetsInnerHtmlToListOfHeadlines() {
  view.display();
  assert.isTrue("View sets inner html to list of headlines",
    listDivMock.innerHTML === "<ul><li>Test headline 1</li><li>Test headline 2</li></ul>")
})();

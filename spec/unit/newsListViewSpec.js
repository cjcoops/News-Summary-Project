"use strict";

var mockStories = mockResponseObject.response.results;
var listDivMock = {}
var mockStory1 = {
  webTitle: "Mock story one"
}
var mockStory2 = {
  webTitle: "Mock story two"
}
var newsListMock = {
  stories: [mockStory1, mockStory2]
}
var view = new NewsListView(listDivMock, newsListMock);

(function testListViewInstantiatedWithPageElement() {
  assert.isTrue("View instantiated with list element",
    view instanceof NewsListView);
})();

// (function testSetsInnerHtmlToListOfHeadlines() {
//   assert.isTrue("View sets inner html to list of headlines",
//     listDivMock.innerHTML === )
// })();

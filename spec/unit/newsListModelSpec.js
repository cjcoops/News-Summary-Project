"use strict";

var mockStories = mockResponseObject.response.results;
var list = new NewsListModel(mockStories);

(function testListInstantiatedWithStories() {
  assert.isTrue("List instantiated with stories",
    list.stories instanceof Array);
})();

(function testGetHeadlineForIndividualStory() {
  assert.isTrue("Get headline for individual story",
    list.getHeadline(0) === "Novak Djokovic beats Andy Murray to win the Qatar Open – as it happened")
})();

(function testGetUrlForIndividualStory() {
  assert.isTrue("Get url for individual story",
    list.getUrl(0) === "https://www.theguardian.com/sport/live/2017/jan/07/andy-murray-novak-djokovic-qatar-open-final-live")
})();

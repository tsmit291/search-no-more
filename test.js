// describe("Click process", function() {
//   it("captures what a user clicks on a search result page", function() {
//     var thing = thing;
//
//     expect(thing).to.equal(thing);
//   })
// })

beforeEach(function() {
  chrome = {
    pageAction: {
      show: function(){},
      onClicked: {
        addListener: function(){}
      }
    }
  }
  spyOn(chrome.pageAction.onClicked, 'addListener');
  spyOn(chrome.pageAction, 'show');
})
describe("Connect to chrome", function() {
  it("connects to google chrome", function() {
  
  })
})

var allLinks = []
var clickedLinks = []

window.onload = () => {
  allLinks = document.getElementsByTagName('a')
  clickedLinks = JSON.parse(localStorage.getItem('clickedLinks'))

  console.log(JSON.stringify(clickedLinks, null, 2))

  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', (e) => {
      clickedContent(e.target.href)
    }, true);
  }
}

function clickedContent(url) {
  var index = -1

  for (var i = 0; i < clickedLinks.length; i++) {
    if(clickedLinks[i]["url"] === url) {
      index = i
    }
  }

  if (url === "file:///Users/localadmin/workspace/openSource/search-no-more/test.html#") {
    clickedLinks = []
    location.reload()
    localStorage.clear('clickedLinks')
  } else if (index === -1) {
    clickedLinks.push({
      url: url,
      count: 1
    })
  } else {
    clickedLinks[index]["count"]++
  }
}

window.onunload = () => {
  localStorage.setItem('clickedLinks', JSON.stringify(clickedLinks))
}

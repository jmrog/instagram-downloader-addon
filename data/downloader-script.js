self.on("click", function(node) {
  var url = node.previousElementSibling.getAttribute("src"),
      urlFilename = url.substring(url.lastIndexOf("/"));

  // Swap the filename with the filename for the normal-sized image
  var pattern = /(\d+_\d+_\d+_)[a-z]\.jpg/;
  urlFilename = urlFilename.replace(pattern, "$1n.jpg");

  // Select a random Instagram subdomain, for politeness' sake(?),
  // and create full URL to normal-sized image
  var subdomainLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var instaUrl = "http://photos-"
    + subdomainLetters[Math.floor(Math.random() * 8)]
    + ".ak.instagram.com/hphotos-ak-xpa1" + urlFilename;

  // Pass the constructed URL back to the extension
  self.postMessage(instaUrl);
});
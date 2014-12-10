(function() {
  var data = require("sdk/self").data;
  var contextMenu = require("sdk/context-menu");
  var tabs = require("sdk/tabs");

  var menuItem = contextMenu.Item({
    label: "Download from Instagram",
    context: [
      contextMenu.SelectorContext(".photoShadow, .compPhotoShadow"),
      // contextMenu.SelectorContext(".Image.iLoaded"),
      contextMenu.URLContext("*.instagram.com")
    ],
    contentScriptFile: data.url("downloader-script.js"),
    onMessage: function (instaUrl) {
      tabs.open(instaUrl);
    }
  });
}());

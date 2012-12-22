var notifications = require("notifications");
var self = require("self");
var myIconURL = self.data.url("chung.jpg");
notifications.notify({
  text: "Em chào anh Chung",
  iconURL: myIconURL
});

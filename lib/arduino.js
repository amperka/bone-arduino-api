module.exports.delay = function(millis) {
  var date = new Date();
  while((new Date())-date < millis);
}

var convert = function (date) {
  var year = date.getYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return year + '-' + month + '-' + day
}
export default {
  convert
}

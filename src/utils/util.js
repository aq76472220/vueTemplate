//检测是否为空
function isNull(e) {
  return e == undefined || e == "undefined" || e == null || e == "" || e == 0
}

module.exports =  {
  isNull
}


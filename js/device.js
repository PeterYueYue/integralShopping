var scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale +
  ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';

//判断手机横竖屏状态：
function hengshuping() {
  if (window.orientation == 180 || window.orientation == 0) {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  }
  if (window.orientation == 90 || window.orientation == -90) {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  }
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
window.onresize = function () {
  var wid = document.body.clientWidth || document.documentElement.clientWidth;
  var fz = wid / 7.5;
  document.getElementsByTagName("html")[0].style.fontSize = fz + "px";
};
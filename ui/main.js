console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = "Madhan";

var img = document.getElementById('madi');
function moveRight () {
    mginLeft = marginLeft + 10;
    img.style.marginLeft = mginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
}
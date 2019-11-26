var n = prompt("sheiyvanet saxeli");
var ol = document.querySelector('#student-list');
while(n != ""){
    var li = document.createElement('li');
    li.innerHTML= n;
    ol.appendChild(li);
    var n = prompt("sheiyvanet saxeli");
}
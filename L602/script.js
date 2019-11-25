 var refelem = document.getElementById("container").children[0];
 var div = document.createElement('div');
 div.innerHTML = "amocana ";
 function insertAfter(elem, refElem){
     refelem.parentNode.insertBefore(elem, refelem.nextSibling);
 }
 
 insertAfter(div , refelem);
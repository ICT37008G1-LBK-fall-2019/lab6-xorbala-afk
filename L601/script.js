var k = document.getElementById("id").childElementCount;
var m;
var z = 'dato';
m = document.getElementById("id");
for(let i=0;i<k;i++){
    if(m.children[i].hasAttributes("data-student-id")){
        if(m.children[i].getAttribute('data-student-id')==z){
            console.log('ddd');
            m.children[i].style.backgroundColor = "green";
        }
    }
}
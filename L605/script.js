var students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
];
function displayStudentsTable(studentList){
    //write code
    var table = document.querySelector('#table');
    for (var i = 0; i < studentList.length; i++) {
    	var tr = document.createElement('tr');
        table.appendChild(tr);

        var ol = Object.keys(studentList);
        console.log(ol,ol.length);
        for(var j =0;j<ol.length;j++){
        	 var td = document.createElement('td');
        	      
        	 var v=Object.values(studentList[i]);
        	 td.innerHTML = v[j];
        	 table.lastChild.appendChild(td);
        }   	 
    }
}
displayStudentsTable(students);
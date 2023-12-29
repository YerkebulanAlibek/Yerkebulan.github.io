document.addEventListener('keyup', function (event) {
									 
    var totalmarks = 0;
    var x = document.getElementsByClassName("marks");
    for(var i = 0; i<x.length; i++){
    
    if(x[i].value!='')	{
    
    if(parseFloat(x[i].value)>=95)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-green">Grade A+</mark>';
    }
    else if(parseFloat(x[i].value)>=90)
    {document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade A-</mark>';
    }
    else if(parseFloat(x[i].value)>=80)
    {
     document.getElementsByClassName("  grade")[i].innerHTML='<mark class="col-blue">Grade B+</mark>';
    }
    else if(parseFloat(x[i].value)>=70)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade B-</mark>';
    }
    else if(parseFloat(x[i].value)>=60)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade C+</mark>';
    }
    else if(parseFloat(x[i].value)>=50)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade C-</mark>';
    }		
    else 
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-red">Fail</mark>';
    }
     totalmarks += parseFloat(x[i].value);
    }
    }
    
    var percentage = parseFloat(totalmarks)/6;
    
    document.getElementById('percentage').innerHTML='<mark>'+percentage +' %</mark>';
    
    if(parseFloat(percentage)>90)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-green">Grade A</mark>';
    }
    else if(parseFloat(percentage)>80)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade B</mark>';
    }
    else if(parseFloat(percentage)>70)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade C</mark>';
    }
    else if(parseFloat(percentage)>60)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade D</mark>';
    }
    else if(parseFloat(percentage)>50)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade E</mark>';
    }
    else if(parseFloat(percentage)>40)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade F</mark>';
    }		
    else 
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-red">Fail</mark>';
    }
    });
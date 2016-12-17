/*global $*/
/*global mainChart */
var company = $("#company");
var gender = $("#gender");
var race = $("#race");
var salary = $("#salary");
var hours = $("#hours");
var name = $("#name")
$("#savec").on("click",function(event)
{
    var person = {
    company:company.value,
    gender:gender.value,
    race:race.value, 
    salary:salary.value,
    hours:hours.value,
    name:name.value,
    };
    
    mainChart.series[0].addPoint({x:parseInt( hours.val()),y:Math.floor(Math.random()*700)+1,z:parseInt (salary.val()),name:name.val(),gender:gender.val(),race:race.val()});
    
    
    company.val("");
    gender.val("");
    race.val("");
    salary.val("");
    hours.val("");
    name.val("");
    
});



//hoursWorked: 95, y: Math.floor(Math.random()*700)+1, z: 23000, name: 'Joe', gender: 'Male',race:'Latino' 
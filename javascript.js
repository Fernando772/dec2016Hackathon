// JavaScript File
/*global $*/
/*global Highcharts*/
var mainChart = null;
$(function () {

    mainChart=Highcharts.chart('graph', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 0,
            
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: null
        },

        xAxis: {
            gridLineWidth: 0,
            
            title:{
                text:"Hours Worked",
            },
            labels: {

            
            },
           
        },

        yAxis: {
         min: 0,
        gridLineWidth: 0,
            
            startOnTick: false,
            endOnTick: false,
            title:{
                text:null
            },

            labels: {
                enabled:false
            },
            maxPadding: 0.2,

        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                '<tr><th>Hours Worked:</th><td>{point.x} Hours</td></tr>' +
                '<tr><th>Gender</th><td>{point.gender}</td></tr>' +
                '<tr><th>Salary(anually):</th><td>USD${point.z}</td></tr>'+
                '<tr><th>Race:</th><td>{point.race}</td></tr>',
            followPointer: false
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 40, y: 600, z: 50033, name: 'Joe', gender: 'Male',race:'Misc'  },
                { x: 40, y: 100,z: 39157, name: 'Sam', gender:'Female',race:'Misc'   },

               
            ]
        }]

    });
});


/* change navbar color on scroll */


    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 600) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "#333");
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
      });
    });
    var sumSalary=0;
    var sumHours=0;
    $("#averageButton").click(function(){
        for( var i=0;i<mainChart.series[0].data.length;i++ ){
        var indexHours=mainChart.series[0].data[i].x;
        var indexSalary=mainChart.series[0].data[i].z;
        sumSalary=sumSalary+indexSalary;
        sumHours=sumHours+indexHours;
        
    }
    var averageSalary=sumSalary/mainChart.series[0].data.length;
    var averageHours=sumHours/mainChart.series[0].data.length;

mainChart.series[0].addPoint({ x:averageHours,y:Math.floor(Math.random()*700)+1,z:averageSalary,name:"Average",gender:"N/A",race:'N/A' });




        
    });
   
//{ x: 40, y: Math.floor(Math.random()*700)+1,z: 39157, name: 'Bob', gender:'Female',race:'Misc'   }    
    
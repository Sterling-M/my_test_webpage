

var reportX = function (min,max,range,median,average) {
    document.getElementById("resultf").innerHTML =
    
      "Min = "+ min+" Max ="+ max + " Range ="+ range+ " Median= "+median +" Average= "+average;
    
};



document.getElementById("mean").onclick = function () {
      var x = document.getElementById("Num1").value;
      var y = document.getElementById("Num2").value;
      var z = document.getElementById("Num3").value;
      var a =[x,y,z]
      a.sort(function(a, b){return a - b});
    
      min= Math.min(x,y,z);  
      max= Math.max(x,y,z);   
      range= (max-min); 
      median=a[1];
   
      var x1 =parseFloat(x);
      var y1= parseFloat(y);
      var z1 =parseFloat(z);
      average= (x1+y1+z1)/3;
  
      reportX (min,max,range,median,average);
   
};



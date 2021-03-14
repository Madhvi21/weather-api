var http = require('http') 
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Chandigarh,In&APPID=d4c303a312e8d745fc77d8f6c6ac7c6c'

var server = http.createServer(function(request,response){
//All logic writen here


var request = require('request');
request(url,function(err, res, body){
        var data=JSON.parse(body);
			response.write("<html><body><div id='container'>");
			response.write("<h1>"+ 'City Name - : ' + data['name'] + '<br>' + "</h1>");
			response.write("<h2>"+ 'Temperature - : ' + data.main['temp'] + '<br>' + "</h2>");
			response.write("<h2>"+ 'Humidity - : ' + data.main['humidity'] + '<br>' + "</h2>");
			response.write("<h2>"+ 'Pressure - : ' + data.main['pressure'] + '<br>' + "</h2>");
			response.write("<h2>"+ 'Minimum-Temperature - : ' + data.main['temp_min'] + '<br>' + "</h2>");
			response.write("<h2>"+ 'Maximum-Temperature - : ' + data.main['temp_max'] + '<br>' + "</h2>");
			//response.write("<h2>"+ 'Sunrise Time - : ' + new Date(data.sys['sunrise']+1000)+ "</h2>");
			//response.write("<h2>"+ 'Sunset Time - : ' + new Date(data.sys['sunset']+1000)+ "</h2>");
			
			response.write("</div></body></html>");
			response.end();


  });
}).listen(8081);
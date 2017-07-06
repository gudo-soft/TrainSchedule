// Initialize valuables     
var json_station_data ; 
    
function station_data () {

httpObj = new XMLHttpRequest();
httpObj.open("get", "./station_record.json", false);

httpObj.onload = function(){
    json_station_data = JSON.parse(this.responseText);

//for (var i=0; i<json_station_data.stations.length; i++){
//var txt = txt + json_station_data.stations[i].name + "　" + json_station_data.stations[i].telegraph_code + "<br>";
//var kilo_meter_s = myData.stations[i].kilo_meter;
//kilo_meter_array.push(parseFloat(kilo_meter_s));
//}
//document.getElementById("result").innerHTML = txt;
//console.log(txt);
//var kilo_meter_s = myData.stations[i].kilo_meter;
//kilo_meter = parseFloat(kilo_meter_s);
//console.log(i , kilo_meter);
}
httpObj.send(null);
}

// Initialize valuables     
 var json_timetable_data ;
 var train_length;
function timetable_data () {
httpObj = new XMLHttpRequest();
httpObj.open("get", "./timetable_data.json", false);
httpObj.onload = function(){
  json_timetable_data = JSON.parse(this.responseText);
  train_length = json_timetable_data.trains.length;
//var txt = "";
//for (var i=0; i<myData.trains.length; i++){
//txt = txt + myData.stations[i].name + "　" + myData.stations[i].kilo_meter + "<br>";
//var train_name = myData.trains[i].name;
//console.log(i , train_name);
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

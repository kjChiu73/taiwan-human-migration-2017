var fs = require('fs');
var content = fs.readFileSync('lat-lng.json');
var jsonContent = JSON.parse(content);

var area = {};
jsonContent.forEach(element => {
  area[element['行政區名']] = {
    lat: element['中心點緯度'],
    lng: element['中心點經度'],
  };
  console.log(area[element['行政區名']]);
});

var data = JSON.stringify(area);
fs.writeFileSync('export-lat-lng.json', data);
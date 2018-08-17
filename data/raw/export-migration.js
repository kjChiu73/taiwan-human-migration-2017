var fs = require('fs');
var content = fs.readFileSync('migration-' + process.argv[2] + '.json');
var jsonContent = JSON.parse(content);
var records = jsonContent.result.records;

var area = {};
records.forEach(element => {
  var site = element.site_id.replace(/\s/g, '')
  if ('區域別' == site) {
    return;
  }

  if (null == area[site]) {
    area[site] = {
      '臺北市':{
        male: 0,
        female: 0,
      },
      '新北市':{
        male: 0,
        female: 0,
      },
      '桃園市':{
        male: 0,
        female: 0,
      },
      '臺中市':{
        male: 0,
        female: 0,
      },
      '臺南市':{
        male: 0,
        female: 0,
      },
      '高雄市':{
        male: 0,
        female: 0,
      },
    }
  }

  area[site] = {
    '臺北市':{
      male: area[site]['臺北市']['male'] + parseInt(element.out_tp_m),
      female: area[site]['臺北市']['female'] + parseInt(element.out_tp_f),
    },
    '新北市':{
      male: area[site]['新北市']['male'] + parseInt(element.out_ntp_m),
      female: area[site]['新北市']['female'] + parseInt(element.out_ntp_f),
    },
    '桃園市':{
      male: area[site]['桃園市']['male'] + parseInt(element.out_ty_m),
      female: area[site]['桃園市']['female'] + parseInt(element.out_ty_f),
    },
    '臺中市':{
      male: area[site]['臺中市']['male'] + parseInt(element.out_tc_m),
      female: area[site]['臺中市']['female'] + parseInt(element.out_tc_f),
    },
    '臺南市':{
      male: area[site]['臺南市']['male'] + parseInt(element.out_tn_m),
      female: area[site]['臺南市']['female'] + parseInt(element.out_tn_f),
    },
    '高雄市':{
      male: area[site]['高雄市']['male'] + parseInt(element.out_kh_m),
      female: area[site]['高雄市']['female'] + parseInt(element.out_kh_f),
    },
  }
});

var data = JSON.stringify(area);
fs.writeFileSync('export-migration-' + process.argv[2] + '.json', data);
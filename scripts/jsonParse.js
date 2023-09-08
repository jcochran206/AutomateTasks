// add data from file 
const data = require('../data/pac12.json');
const fs = require('fs');

let jsonObjects = data.features;
const headers = "Team Name" + " , "+ "Stadium Name" + " , "+ "State"+ " , " + "Notes";

// test data is visiable to file
// console.log(jsonObjects, 'is data visible');

function JsonToCsv(json, fileName){
    const csvRows = json.map(obj => {
        let teamName = obj.properties.Tenant;
        let stadiumName = obj.properties.NAME;
        let stateName = obj.properties.State;
        let isOutdoor = obj.properties.NOTES;
        let blobstr = teamName + ',' + stadiumName + ',' + stateName + ',' + isOutdoor;
        return blobstr;
    }).join('\n');
    const csvContent = headers + csvRows;
    
    const csvFilePath = `${fileName}.csv`;

    fs.writeFileSync(csvFilePath, csvContent);

    console.log(csvContent, 'content');
}

// iterate thru data (read properties, Tenant, Name, State)
function jsonReader(json){
    for(index in json){
        let obj = json[index];
        //console.log(obj.properties.Tenant, obj.properties.NAME, obj.properties.State, obj.properties.NOTES)
    }

    JsonToCsv(json, 'test');
}

//call back
console.log(jsonReader(jsonObjects));

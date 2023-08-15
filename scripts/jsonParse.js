// add data from file 
const data = require('../data/pac12.json');

let jsonObjects = data.features;

// test data is visiable to file
// console.log(jsonObjects, 'is data visible');

// iterate thru data (read properties name, tenant, city, state)
function jsonReader(json){
    for(index in json){
        let obj = json[index];
        console.log(obj.properties.Tenant)
    }
}

//call back
console.log(jsonReader(jsonObjects));
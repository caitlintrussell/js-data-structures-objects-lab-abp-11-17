// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver
}
updateDriverWithKeyAndValue(driver, 'name', 'Sam');

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  obj[key]=value;
  return obj;
}
destructivelyUpdateDriverWithKeyAndValue(driver, 'name', 'Sam');
destructivelyUpdateDriverWithKeyAndValue(driver, 'Address', '12 Broadway');


function deleteFromDriverByKey(obj, key) {
const driverClone =  Object.assign({}, obj);
delete obj.key;
return driverClone;
}
deleteFromDriverByKey(driver,'name');

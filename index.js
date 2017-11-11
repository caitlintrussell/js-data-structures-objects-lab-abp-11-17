// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  obj[key]=value;
  return obj;
}
destructivelyUpdateDriverWithKeyAndValue(driver, 'name', 'Sam');
destructivelyUpdateDriverWithKeyAndValue(driver, 'Address', '12 Broadway');

function deleteFromDriverByKey(object, key){
 delete object.key;
 return object;
}
deleteFromDriverByKey (newDriver, Sam);

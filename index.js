var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
}

function deleteFromObjectByKey(object, key){
  return assign({})
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
}

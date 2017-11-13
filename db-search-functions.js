/* global firebase */

function getVersion(handleVersion) {
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/version');
  databaseVersionReference.once('value').then(function(snapshot) {
    
    // You found me! Great job!
    // TODO: Uncomment the code below. It gets the current version value from
    // the database snapshot and passes it as an argument to the 'handleVersion'
    // callback.
    
    var version = snapshot.val();
    handleVersion(version);
  });
}

function getHelloWorldValue(handleType) {
  // TODO: Your code goes here. Hint: use 'getVersion' as a template.
  var database = firebase.database();
  var databaseHelloWorldReference = database.ref('/db-search/hello-world');
  databaseHelloWorldReference.once('value').then(function(snapshot) {
    var hello = snapshot.val();
    handleType(hello);
  });
  
}

function applyDiscount(handleNewPrice) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databasePriceReference = database.ref('/db-search/discount');
  databasePriceReference.once('value').then(function(snapshot) {
    var price = snapshot.val() * 100;
    handleNewPrice(price);
  });
}

function getArrayLength(handleLength) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseArrayReference = database.ref('/db-search/array');
  databaseArrayReference.once('value').then(function(snapshot) {
    var array = snapshot.val();
    handleLength(array.length);
  });
}

function getLastArrayElement(handleElement) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseArrayReference = database.ref('/db-search/array');
  databaseArrayReference.once('value').then(function(snapshot) {
    var array = snapshot.val();
    handleElement(array.pop());
  });
}

function getArrayJoin(handleJoin) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseArrayReference = database.ref('/db-search/array');
  databaseArrayReference.once('value').then(function(snapshot) {
    var array = snapshot.val();
    handleJoin(array.join(" "));
  });
}

function getNumberOrStringType(handleType) {
  // TODO: Your code goes here.\
  var database = firebase.database();
  var databaseArrayReference = database.ref('/db-search/number-or-string');
  databaseArrayReference.once('value').then(function(snapshot) {
    var array = snapshot.val();
    handleType(typeof(array));
  });
}

function getObjectValue(handleValue) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseArrayReference = database.ref('/db-search/object');
  databaseArrayReference.once('value').then(function(snapshot) {
    var array = snapshot.val();
    handleValue(keys(array));
  });
}

function getObjectKeyCount(handleKeyCount) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseArrayReference = database.ref('/db-search/array');
  databaseArrayReference.once('value').then(function(snapshot) {
    var array = snapshot.val();
    handleElement(array.pop());
  });
}
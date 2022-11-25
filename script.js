

var obj1 = {
    "name" : "Person1",
    "age"  :  "5"
};

var obj2 = {
    "name" : "Person1",
    "age"  :  "5"
};

JSON.stringify(obj1) === JSON.stringify(obj2);
//false

_.isEqual(obj1 , obj2) ;
//true
// Ounces to cups
 var ouncesCups = function(q1){
   var userInput = parseInt(prompt(q1));
   var results = userInput/8;
   alert(results);
 };

 ouncesCups("How many ounces? For example: 16, 8, 6, 4");



 //Cups to Ounces
 var cupsOunces = function (q1){
   var userInput = prompt(q1);
   var decimal = eval(userInput);
   var result = decimal*8;
   alert(result);
 };

 cupsOunces("How many cups? (for example: 1, 3/4, 1/2, 1/4...");

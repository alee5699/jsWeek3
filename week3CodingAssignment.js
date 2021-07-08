//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

  var ages = ["3", "9", "23", "64", "2", "8", "28", "93"];
    //console.log(ages);

  /*a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.*/
    console.log(ages[ages.length-1]-ages[0]);

  //b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
  ages.push(104);
    //console.log(ages);

  //c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
  var totalAges = 0;
    for (age of ages) {
      totalAges = totalAges + parseInt(age);
    }
    var averageAge = totalAges/ages.length;
      console.log(averageAge);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
  var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
    //console.log(names);

  //a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
  let lengths = names.map(function(wordLength) {
    return wordLength.length; 
  })
  console.log(lengths); 

  //b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
  for (let i = 0; i < names.length; i++)
      console.log(names[i]);

//3.	How do you access the last element of any array?
var lastItem = names[5]
    // .log(lastItem);

//4.	How do you access the first element of any array?
var firstItem = names[0]
    //console.log(firstItem);

/*5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.*/
let nameLengths = lengths.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let newNameLengths = lengths.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
  console.log(nameLengths);

/*7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/
function wordReturnedByN(word, n) {
  var finalReturn = "";
    for (let i = 0; i < n; i++) {
      finalReturn += word;
    }
    return finalReturn;
}
console.log(wordReturnedByN("Sammy and Frank ", 4));

/*8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).*/
function fullName (firstName, lastName) {
  return "firstName " + "lastName";
}

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function greaterThan100(arrayOfNumbers) {
  let sum = arrayOfNumbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }); if (sum > 100) {
    return true;
  }
} 

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageOfArray(arrayOfNumbers) {
  let sum = arrayOfNumbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  return sum / arrayOfNumbers.length;
}

/*11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/
/*var doubleArray(array1, array2) {
  var array1 = [1, 3, 5, 7, 9] {
    var array2 = [2, 4, 6, 8, 10] {

    }
  }  
}*/

/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside > 100) {
      if (moneyInPocket > 10.50)
      return true;
  }
}

//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function myFirstFunction() {
  for (let i = 0; i <= 15; i++)
    console.log(i);
}
myFirstFunction();

//Screenshots of Code:
//See Above

//Screenshots of Running Application:

//URL to GitHub Repository:

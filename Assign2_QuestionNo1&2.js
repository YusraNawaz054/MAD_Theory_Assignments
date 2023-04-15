                                                            // Array Methods
console.log("----------------Array Methods----------------");


// Get Array Size
let cities = ["Islamabad", "New York", "Paris", "Sydney"];
console.log("Length of array: "+cities.length); 

// Accessing Array Elements
let Arr = [10, 20, 30, 40, 50];
console.log("Elements of array: "); 
Arr.forEach(i =>  console.log(i)); 

// Add Element At Last using push()
cities.push("Attock"); //add new element at last
console.log("After adding new city: "+cities); 

// Remove Last Element
let removedCity = cities.pop(); //returns and removes the last element 
console.log("After removing last city: "+removedCity);

// Concat()
var arr1 = [10, 30, 70];
var arr2 = [40, 80, 90];
var arr3 = arr1.concat(arr2);
console.log("After concatenation of two arrays: "+arr3);

// copywithin()
// cities = ["Islamabad", "New York", "Paris", "Sydney"] 
//place at 0th position, the element between 1st and 2nd position.  
var result=cities.copyWithin(0,1,2);  
console.log("After copying within an array: "+result);

// toString()
const numbers = [1, 2, 3, 4, 5];
const string = numbers.toString();
console.log("After converting array to string: "+string);

//Slice()
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 4);
console.log("After slicing: "+newArray); 

//Splice()
//array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b');
console.log("After splicing: "+array);

//Indexof()
const arrayI = [1, 7, 3, 4, 9];
const index = arrayI.indexOf(7);
console.log("Index of 7: "+index);

//Map()
const Norarray = [22, 33, 44, 55];
const MapArray = Norarray.map(element => element * 2);
console.log("Mapped Array: "+MapArray);

//Join()
const arry = ['apple', 'banana', 'orange'];
const joinedString = arry.join(', ');
console.log("After joining: "+joinedString);

//Reverse()
const arrayN = [1, 2, 3];
arrayN.reverse();
console.log("After reversing: "+arrayN);

//Sort()
const num = [3, 1, 4, 1, 5, 9];
num.sort();
console.log("After sorting: "+num);

//Lastindexof()
const ary = [1, 2, 3, 4, 5, 3];
const lastIndex = ary.lastIndexOf(3);
console.log("Last index of 3: "+lastIndex); 

//Filter()
//array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(element => element > 3);
console.log("After filtering: "+filteredArray); 

//Some()
//array = [1, 2, 3, 4, 5];
const hasEvenNumber = array.some(element => element % 2 === 0);
console.log("After using some method:  "+hasEvenNumber); 

//Every()
//array = [1, 2, 3, 4, 5];
const isGreaterThanZero = array.every(element => element > 0);
console.log("After using every method:  "+isGreaterThanZero); // Output: true

//Form()
const strg = "Friends";
const arrayS = Array.from(strg);
console.log("After using form method:  "+arrayS);

//Isarray()
const ar = [1, 2, 3];
const isAnArray = Array.isArray(ar);
console.log("After using isArray method:  "+isAnArray); 



                                                            // Array Methods
console.log("----------------String Methods----------------");

 //String length
let newStrg = "Pakistan";
console.log("Length Of string "+newStrg.length);

//String slice()
console.log("After slicing: "+newStrg.slice(0,3));

//String substring()
console.log("substring is: "+newStrg.substring(5,8));

//String substr()
console.log("After using substr method: "+newStrg.substr(3));

//String replace()
console.log("After replacing: "+newStrg.replace("Pak","Afghan"));

//String replaceAll()
let text="I am Human. I love being a Human"
console.log("After replacing all: "+text.replaceAll("Human","Robot"));

//String toUpperCase()
console.log("Uppercase: "+newStrg.toUpperCase());

//String toLowerCase()
console.log("Lowercase: "+newStrg.toLowerCase());

//String concat() 
let strg3= newStrg.concat(" Zindabad");

//String trim()
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log("After trimming: "+text2);

//String trimStart()
text2 = text1.trimStart();
console.log("After trimming at start: "+text2);

//String trimEnd()
text2 = text1.trimEnd();
console.log("After trimming at end: "+text2);

//String padStart()
let txt = "5";
let padded = txt.padStart(3,"0");
console.log("After padding at start: "+padded);

//String padEnd()
padded = txt.padEnd(3,"0");
console.log("After padding at end: "+padded);

//String charAt()
//newStrg = "Pakistan";
console.log("Character at index 1 is: "+newStrg.charAt(1));

//String charCodeAt()
//newStrg = "Pakistan";
console.log("ASCII code of character at index 1 is: "+newStrg.charCodeAt(1));

//String split()
let newtext="I Am Human";
const myArr = newtext.split(" ");
console.log("After spliting: "+myArr);


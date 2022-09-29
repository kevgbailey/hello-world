//string declarations
let x = 25; 
let firstName = 'Kevin';
let lastName = 'Bailey';
let fullName = firstName + ' ' + lastName;
//the brackets find the letter at the spot told, this outputs K.B.
let initials = firstName[0] + "." + lastName[0] + "."

console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(initials);

//outputs a number equal to the length of the string fullName
console.log(fullName.length);//it will include the space as a character

//string methods
//use parentheses after stating a method()
console.log(fullName.toUpperCase());

//returns the number based on the position of given character
console.log(fullName.indexOf('e'));

//slice will "slice" the string for you wherever you give it the starting and ending points. 
let cutname = fullName.slice(1,10);
console.log(cutname);

//I am going to write a function that will end a string when it has the letter "p"

let string = "Have you heard the tragedy of Darth plageuis the Wise?"
let p = string.indexOf('p');
let slicedstring = string.slice(0,p+1);
console.log(slicedstring);
//cool!

//substr is kinda like slice, but it starts at the second spot and goes 4 more spots.
console.log(fullName.substr(2,5));

//replaces K with B
console.log(fullName.replace('K','B'))


console.log('-------------------------------------NUMBA TIME');

//number testing
/*math operators:
+.-,*,/,**(to the power of), %(gets a remainder)
 */
let radius = 10;
const pi = 3.14159;

let area = pi * radius**2;
console.log(area);

//examples of some properties
console.log(radius, radius += 10, radius -=5, radius *= 10, radius --);

//how to concatenate numbers
let result = 'the radius is ' + radius + "m";
console.log(result);

//create html outputs??
let html = `<h2>${result}</h2>
<p>${radius}</p>`;

console.log(html);

//arrays!!

let smashMains = ['Steve','Ken','Diddy Kong'];
console.log(smashMains);
console.log(smashMains[0]);
console.log(smashMains[1]);
console.log(smashMains[2]);
//how to override
smashMains[2] = 'Bowser Jr.';
console.log(smashMains[2]);

//how to turn your string array into one big dude
let allSMs = smashMains.join(',');
console.log(allSMs);

console.log(smashMains.indexOf('Ken'));

//objects!!
let car = {
model: "VW Jetta",
year: 2011,
color: "red",
isWorking: true,
fullSpecs : function() {
    return "This car is a " + this.year + " " +this.color + " " + this.model + ".";
   }
}

console.log(car.fullSpecs);

//for loops!
//this for loop uses an if else statement to display an exponentially increasing and decreasing list of numbers
let numb = 1;
let counter = 50
for(let i = 0; i < counter; i++){
    if (i < (counter/2)){
    numb = numb + numb;
    console.log(numb);
    }
    else{
    numb = numb/2;
    console.log(numb);    
    }

}

//FUNCTIONS BABY
function epic(x,y){
    console.log((x+y)/(y+3));

}
epic(4,3);
epic(20,1);

function concatenation(string1,string2){
constring = string1 + string2;
console.log(constring);
}
concatenation('hello ', 'world');

//arrow function

const calcArea = (radius) => 3.14*radius**2

console.log(calcArea(4));

//array functions
var bill = function(products,tax){
let total = 0;
for(let i = 0; i<products.length; i++){
total = total + products[i]+ products[i]*tax;
}
return total;
}
console.log(bill([500,20,10], 0.1));

//------------------------------------------
//OBJECTS OH YEAH
let school = {
    name: 'Utah Valley University',
    location: 'Orem, UT',
    studentBody: 35000,
    degrees: ['Computer Science', 'Gender Studies', 'Civil Engineering','Buisness Management'],
    register: function(){
        school.studentBody = this.studentBody + 1;
        console.log("You have successfully registered for " + this.name + ". The total student body is now " + this.studentBody );
    }, 
    signUpForClasses: function(x){
        console.log("You have registered for the " + this.degrees[x] + " degree.");
    }


}
console.log(school);
console.log(school.degrees[3]);
console.log(school['location']);

school.location = 'Provo, UT';
console.log(school.location);

console.log(typeof school);

school.register();
school.signUpForClasses(0);

//BROWSER INTERACTION LETS GOOOOOO
//------------------------------------



//THOMAS HOMEWORK

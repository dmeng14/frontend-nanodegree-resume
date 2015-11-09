
var firstName = "Dan";
console.log(firstName);

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    s = s[1].toUpperCase() + s.slice(2);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array.slice(0);
	var lastElement = newArray.pop();
	newArray.push(lastElement + 1);
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

	var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
	// Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

var skills = ["programming", "teaching", "JS"];
console.log(skills.length);

var bio = {
	"name" : "Dan",
	"skills" : skills
};

console.log(bio.name, bio.skills);

var name = "Dan Meng";
var role = "Software Developer";
var contact = "dmeng14@gmail.com"
var picURL = "https://lh3.googleusercontent.com/-mv7M8w2muYM/VT1LduVeO3I/AAAAAAAAAfI/dCZrSur4pbc/w140-h140-p/default%2B%25281%2529.jpeg";
var welcome = "Welcome to my website!";
var skills = ["Programming", "Python", "Java", "SQL"];

var biography = {
	"name" : name,
	"role" : role,
	"contact" : contact,
	"pic" : picURL,
	"message" : welcome,
	"skills" : skills
};
biography.location = "Greater New York Area";


for (skill in skills) {
	console.log(skills[skill]);
}
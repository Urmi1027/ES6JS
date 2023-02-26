// var printPlayerName=function(name){
// 	console.log(name);
// }
// printPlayerName("Sakib");
// function myFunction(){
// 	let CarName = "Volvo";
// 	console.log(CarName);
//We have to print random Number. we use function
// In Ludo play it using
// function getRandomNumber(min, max){
// 	return Math.floor(Math.random()* (max-min+1))+ min;

// }
// console.log(getRandomNumber(1,6));
//How to organized our Classroom's student's name
// with ALPHABETICALLY BY using Array.sort methode
// const students = ["Urmi","Fahim","Ashfaq","Pinky","Sagor"];
// console.log(students.sort());
//Leap year
// function isLeapYear(year){
// 	if((year % 400===0) || ((year % 4===0) && (year % 100!==0))) {
// 		console.log(`${year} is  Leap Year!`);
		
// 	} else {
// 		console.log(`${year} is not Leap Year!`);
		
// 	}
	
// }
// isLeapYear(2004);

// Find how many vowel in the sentence
const vowels = ["a","e","o","i","u","A","E","I","O","U"];
function countVowels(sentence)
{
let count = 0;
const latters = Array.from(sentence);

latters.forEach(function(value){
	if(vowels.includes(value)){
		count++;
	}
});
return count;
}
console.log(countVowels("I Love My Country"));

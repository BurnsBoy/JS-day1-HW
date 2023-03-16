//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    let inString = false
    dog_names.forEach(element => {
        if (dog_string.includes(element)){
            inString = true
            console.log(`Matched ${element}`)
        }
    });
    if (!inString){
        console.log("No Matches")
    }
}
findWords()

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0)
            arr.splice(i, 1, "even index")
    }
}
replaceEvens(arr)
console.log(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//CODEWARS

//Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
    return Math.sqrt((Math.abs(a.x - b.x) ** 2) + (Math.abs(a.y - b.y) ** 2))
}

//Even or Odd
function evenOrOdd(number) {
    if (number % 2 == 0)
      return "Even"
    else
      return "Odd"
}
console.log(`7 is ${evenOrOdd(7)}`)
console.log(`45645 is ${evenOrOdd(45645)}`)
console.log(`5672 is ${evenOrOdd(5672)}`)

//Disemvowel Trolls
function disemvowel(str) {
    let s = ''
    let strArr = str.split('')
    strArr.forEach(element => {
        if (!"aeiouAEIOU".includes(element)){
            s += element
        }
    });
    return s;
}
console.log(disemvowel("This website is for losers LOL!"))

//Exes and Ohs
function XO(str) {
    let numX = 0
    let numO = 0
    strArr = str.split('')
    strArr.forEach(element => {
        if (element.toLowerCase() == 'x'){
            numX++;
        }
        else if (element.toLowerCase() == 'o'){
            numO++;
        }
    });  
    return numX == numO;
}
s1 = "xXooO"
s2 = "xoxoxXoo"
console.log(`it's ${XO(s1)} that "${s1}" has as many x's as o's`)
console.log(`it's ${XO(s2)} that "${s2}" has as many x's as o's`)

// Task1
// პირველი ამოხსნა
function palindrom(text) {
    let floor=text.toLowerCase();
    for(let i = 0; i <floor.length; i++) {
    if(floor [i] != floor[floor.length - (i+1)]) return false 
    } return true
}
console.log(palindrom(`madam`));


// მეორე ამოხსნა
function palindrom1(text) {
    let floor=text.toLowerCase();
    return floor == floor.split(``).reverse().join(``);
}
console.log(palindrom1(`airevi iveria`));

// task2
arr9=[`cdbdal`]
function string(text) {
for(let i = 0; i<text.length; i++){
    if(!text.includes(text[i]++)) {
    return text[i];
    }   
}
}
console.log(string(`cdbdal`));

// task3

function firstToUpper(txt) {
    return txt[0].toUpperCase() + txt.substring(1);
}
function camelize(text) {
    let wordsArr= text.split(` `);
    let camel=``
    wordsArr.forEach((word,index)=>{
        camel += index === 0 ? word : firstToUpper(word);
    })
    return camel
}
console.log(camelize(`sad midis matarebeli`));


// task4
function normalize (i) {
    let x = i % 10
    if (x === 1 ) {
        return i + "st";
    }
    if (x === 2 ) {
        return i + "nd";
    }
    if (x === 3 ) {
        return i + "rd";
    }
    return i + "th";
}
console.log(normalize(153));

// task5
let arr1=[3,`a`,`a`,`a`,2,3,`a`,3,`a`,2,4,9,3]
function reduce (arr) {
    return arr.reduce((acc,cur) => {
        if(acc[cur]){
            acc[cur]++;
        } else acc[cur]=1;
        return acc
    },{})
}
console.log(reduce(arr1));

// task6
let array1=[1,2,3];
let array2=[2,30,1];
function sumOfNumbers(array1,array2) {
    let array3=array1.concat(array2)
    let result= []
    for(let i = 0; i < array3.length; i++){
    if(result.indexOf(array3[i]) === -1){
    result.push(array3[i])}
    }
    return result;
}

console.log(sumOfNumbers(array1,array2));

// task7
function readyToPutInTheDOM(arr) {
    return arr.map(({name,age}) => `<h1>${name}<h1><h2>${age}<h2>`)
}
    console.log(readyToPutInTheDOM([
        {name:`Angelina Jolie`, age:80},
        {name:`Eric Jones`, age:2},
        {name:`Pris Hilton`, age:5},
        {name:`Kayne West`, age:16},
        {name:`Bob Ziroll`, age:100},
    ]));

// task8
let arr11 = [0, 0, 0, 0, 0, 1];
let arr22 = [0, 0, 0, 0, 1, 0, 0, 0, 0];
let arr33 = [0, 0, 0, 1, 0];
let arr44 = [1, 2, 3, 4, 5];
let arr55 = [];

function count (text) {

}
    
// task9
// პირველი რეკუსიული ვარიანტი
function sumOfDigits(n) {
    if (n<10) {return n}
    else return n%10 +sumOfDigits(Math.floor(n/10))
}
console.log(sumOfDigits(1234));

// მეორე ჩვეულებრივი ამონახსნი

function sumOfDigits1(n) {
    let coverted= n.toString();
    let split=coverted.split(``);
    return split.reduce((acc,cur) => {
        return acc+= +cur
    },0)
}
console.log(sumOfDigits1(123));



